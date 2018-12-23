import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  return (
    <section className="card book">
      <div
        className="book-cover"
        alt={book.title}
        style={{ backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}
      />
      <h5 className="card-title book-title">{book.title}</h5>
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
