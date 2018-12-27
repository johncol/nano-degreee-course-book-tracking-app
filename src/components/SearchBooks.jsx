import React from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import Shelf from './Shelf.jsx';
import Notification from './common/Notification.jsx';
import Loader from './common/Loader.jsx';
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

class SearchBooks extends React.Component {
  state = {
    results: [],
    query: '',
    notification: {
      visible: false
    },
    loading: false
  };

  search = debounce(query => {
    if (query !== '') {
      this.setState({ loading: true });
      BooksApi.search(query)
        .then(results => {
          this.setState({ results });
          this.setState({ loading: false });
        })
        .finally(() => this.setState({ loading: false }));
    } else {
      this.setState({ results: [] });
    }
  }, 500);

  updateQuery = event => {
    const query = event.target.value;
    this.setState(() => ({ query }), () => this.search(query.trim()));
  };

  toggleNotification = () => {
    this.setState(state => ({
      notification: {
        visible: !state.notification.visible
      }
    }));
  };

  render() {
    const { results, query, notification, loading } = this.state;
    const { onSetBookShelf } = this.props;

    return (
      <div className="search-books">
        {notification.visible && <Notification onHide={this.toggleNotification}>Book added to shelf</Notification>}
        <SearchBar query={query} onUpdateQuery={this.updateQuery} />
        {loading && <Loader />}
        <Shelf
          books={results}
          shelf={{ name: 'search' }}
          onSetBookShelf={(book, shelf) => {
            this.toggleNotification();
            onSetBookShelf(book, shelf);
          }}
        />
      </div>
    );
  }
}

SearchBooks.propTypes = {
  onSetBookShelf: PropTypes.func.isRequired
};

export default SearchBooks;
