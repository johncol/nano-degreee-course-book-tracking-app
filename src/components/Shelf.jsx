import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

function byTitle(book1, book2) {
  return book1.title > book2.title ? 1 : -1;
}

const Shelf = props => {
  const { books, shelf, onSetBookShelf } = props;

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
        {books.sort(byTitle).map(book => (
          <Book book={book} key={book.id} onSetBookShelf={onSetBookShelf} />
        ))}
      </div>
    </div>
  );
};

Shelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelf: PropTypes.object,
  onSetBookShelf: PropTypes.func.isRequired
};

export default Shelf;
