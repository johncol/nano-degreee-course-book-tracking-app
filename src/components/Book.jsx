import React from 'react';
import PropTypes from 'prop-types';

import BookMenu from './BookMenu';

const noCoverUrl =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNL0hmpLOezaeiXdKjFLz4GpXndktadW31NAueLyXbkzZK9RSig';

const coverUrlFor = book => {
  return book.imageLinks && book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : noCoverUrl;
};

const Book = props => {
  const { book, onSetBookShelf } = props;
  return (
    <section className="card book">
      <div className="book-cover" alt={book.title} style={{ backgroundImage: `url(${coverUrlFor(book)})` }} />
      <h5 className="book-title">{book.title}</h5>
      {book.authors && (
        <h3 className="book-authors">
          <span>by</span>
          <br />
          {book.authors.map((author, index) => (
            <span key={author} className="book-author">
              {author}
              {index < book.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </h3>
      )}
      <BookMenu book={book} onSetBookShelf={shelf => onSetBookShelf(book, shelf)} />
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onSetBookShelf: PropTypes.func.isRequired
};

export default Book;
