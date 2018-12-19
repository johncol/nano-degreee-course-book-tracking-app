import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  return (
    <section className="card book">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
      </div>
    </section>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
