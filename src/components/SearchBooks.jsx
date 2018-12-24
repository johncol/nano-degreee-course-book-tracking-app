import React from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

import Shelf from './Shelf.jsx';
import * as BooksApi from './../api/BooksAPI';

class SearchBooks extends React.Component {
  state = {
    results: [],
    query: ''
  };

  search = debounce(query => {
    if (query !== '') {
      BooksApi.search(query).then(results => this.setState({ results }));
    } else {
      this.setState({ results: [] });
    }
  }, 500);

  updateQuery = event => {
    const query = event.target.value.trim();
    this.setState(() => ({ query }), () => this.search(this.state.query));
  };

  render() {
    const { results, query } = this.state;
    const { onSetBookShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-bar">
          <input
            type="search"
            className="form-control"
            id="search-input"
            placeholder="Search books by name"
            value={query}
            onChange={this.updateQuery}
            autoComplete="off"
          />
        </div>
        <Shelf books={results} shelf={{ name: 'search' }} onSetBookShelf={onSetBookShelf} />
      </div>
    );
  }
}

SearchBooks.propTypes = {
  onSetBookShelf: PropTypes.func.isRequired
};

export default SearchBooks;
