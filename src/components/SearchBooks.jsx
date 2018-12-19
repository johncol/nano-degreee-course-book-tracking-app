import React from 'react';

const SearchBooks = () => {
  return (
    <div className="search-books">
      <input
        type="search"
        className="form-control"
        id="search-input"
        placeholder="Search books by name or author"
      />
    </div>
  );
};

export default SearchBooks;
