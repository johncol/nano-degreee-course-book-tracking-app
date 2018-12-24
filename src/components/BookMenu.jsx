import React from 'react';

import Dropdown from './common/Dropdown';
import Shelves from '../constants/Shelves';

const BookMenu = ({ book }) => {
  return (
    <Dropdown
      className="book-menu"
      dropdownId={book.id}
      label="Status"
      selected={book.shelf}
      selectedOptionProp="id"
      optionsLabelProp="name"
      items={Shelves}
    />
  );
};

export default BookMenu;
