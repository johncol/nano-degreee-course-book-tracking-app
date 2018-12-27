import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const byTitle = (book1, book2) => {
  return book1.title > book2.title ? 1 : -1;
};

const Shelf = props => {
  const { books, onSetBookShelf } = props;
  const toBookElement = book => <Book book={book} key={book.id} onSetBookShelf={onSetBookShelf} />;

  return (
    <div className="shelf">
      <p className="lead">
        <span>
          Displaying {books.length} book{books.length !== 1 ? 's' : ''}
        </span>
      </p>
      <div className="shelf-books">{books.sort(byTitle).map(toBookElement)}</div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSetBookShelf: PropTypes.func.isRequired
};

export default Shelf;
