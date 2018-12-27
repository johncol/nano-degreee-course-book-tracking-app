import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import Notification from './common/Notification.jsx';
import Loader from './common/Loader.jsx';
import Book from './Book';
import { byTitle } from './../utils/book-utils';
import * as BooksApi from './../api/BooksAPI';

const SearchBar = ({ query, onUpdateQuery: updateQuery }) => (
  <div className="search-bar">
    <input
      type="search"
      className="form-control"
      id="search-input"
      placeholder="Search books by name"
      value={query}
      onChange={updateQuery}
      autoComplete="off"
    />
  </div>
);

const SearchResults = ({ books, onSetBookShelf, query, loading }) => {
  const toBookElement = book => <Book book={book} key={book.id} onSetBookShelf={onSetBookShelf} />;
  const validQuery = query && query.trim() !== '';

  return (
    <div className="shelf">
      <p className="lead">
        {loading && <span>Searching..</span>}
        {!loading && !validQuery && <span>Type something to search for</span>}
        {!loading && validQuery && (
          <span>
            {books.length === 0 && <span>No books were found</span>}
            {books.length > 0 && (
              <span>
                {books.length} book{books.length !== 1 ? 's were' : ' was'} found
              </span>
            )}
          </span>
        )}
      </p>
      <div className="shelf-books">{books.sort(byTitle).map(toBookElement)}</div>
    </div>
  );
};

class SearchBooks extends React.Component {
  state = {
    results: [],
    query: '',
    queryToTriggerSearch: '',
    showNotification: false,
    loading: false
  };

  setShelvesToResults = results => {
    return results.map(result => {
      const books = this.props.booksInShelves.filter(book => book.id === result.id);
      if (books.length === 1) {
        result.shelf = books[0].shelf;
      }
      return result;
    });
  };

  callSearchApi = query => {
    BooksApi.search(query)
      .then(results => {
        this.setState({
          results: this.setShelvesToResults(results)
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  search = debounce(query => {
    if (query !== '') {
      this.setState({
        loading: true,
        queryToTriggerSearch: query
      });
      this.callSearchApi(query);
    } else {
      this.setState({ results: [] });
    }
  }, 500);

  updateQuery = event => {
    const query = event.target.value;
    this.setState(() => ({ query }), () => this.search(query.trim()));
  };

  setBookShelfAndNotify = (book, shelf) => {
    this.setState({ showNotification: true });
    setTimeout(() => this.setState({ showNotification: false }), 1500);
    this.props.onSetBookShelf(book, shelf);
  };

  render() {
    const { results, query, queryToTriggerSearch, showNotification, loading } = this.state;

    return (
      <div className="search-books">
        {showNotification && <Notification>Book added to shelf</Notification>}
        <SearchBar query={query} onUpdateQuery={this.updateQuery} />
        {loading && <Loader />}
        <SearchResults
          loading={loading}
          query={queryToTriggerSearch}
          books={results}
          shelf={{ name: 'search' }}
          onSetBookShelf={this.setBookShelfAndNotify}
        />
      </div>
    );
  }
}

SearchBooks.propTypes = {
  onSetBookShelf: PropTypes.func.isRequired,
  booksInShelves: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchBooks;
