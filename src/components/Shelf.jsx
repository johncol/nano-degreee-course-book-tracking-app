import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const Shelf = props => {
  const { books, shelf } = props;
  return (
    <div className="shelf">
      <p className="lead">
        {shelf && (
          <span>
            Displaying books in the <strong className="shelf-name">{shelf.name}</strong> shelf
          </span>
        )}
        {!shelf && <span>Displaying all books in all your shelves</span>}
      </p>

      <div className="shelf-books">
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelf: PropTypes.object
};

export default Shelf;
