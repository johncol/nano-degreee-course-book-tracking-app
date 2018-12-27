import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Shelf from './Shelf';
import Shelves from '../constants/Shelves';

const ShelvesContainer = props => {
  const { booksInShelves, onSetBookShelf } = props;
  return (
    <div>
      <Route
        exact
        path="/shelves"
        render={() => <Shelf books={booksInShelves.all} onSetBookShelf={onSetBookShelf} />}
      />

      {Shelves.map(shelf => (
        <Route
          key={shelf.id}
          path={'/shelves/' + shelf.path}
          render={() => <Shelf books={booksInShelves[shelf.id]} onSetBookShelf={onSetBookShelf} />}
        />
      ))}
    </div>
  );
};

ShelvesContainer.propTypes = {
  booksInShelves: PropTypes.object.isRequired,
  onSetBookShelf: PropTypes.func.isRequired
};

export default ShelvesContainer;
