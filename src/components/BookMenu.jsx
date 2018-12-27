import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from './common/Dropdown';
import Shelves, { labelFor } from '../constants/Shelves';

const BookMenu = ({ book, onSetBookShelf }) => {
  return (
    <Dropdown
      className="book-menu"
      dropdownId={book.id}
      label={labelFor(book.shelf) || 'add to'}
      selected={book.shelf}
      selectedOptionProp="id"
      optionsLabelProp="name"
      items={Shelves}
      onItemSelected={onSetBookShelf}
    />
  );
};

BookMenu.propTypes = {
  onSetBookShelf: PropTypes.func.isRequired
};

export default BookMenu;
