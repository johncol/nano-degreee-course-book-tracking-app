import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShelvesLayout from './common/ShelvesLayout';
import ShelvesList from './ShelvesList';
import Shelf from './Shelf';
import Shelves from '../constants/Shelves';

const ShelvesContainer = props => {
  const { booksInShelves, onSetBookShelf } = props;
  return (
    <ShelvesLayout>
      <ShelvesList />
      <React.Fragment>
        <Route
          exact
          path="/shelves"
          render={() => <Shelf books={booksInShelves.all} onSetBookShelf={onSetBookShelf} />}
        />

        {Shelves.map(shelf => (
          <Route
            key={shelf.id}
            path={'/shelves/' + shelf.path}
            render={() => <Shelf books={booksInShelves[shelf.id]} shelf={shelf} onSetBookShelf={onSetBookShelf} />}
          />
        ))}
      </React.Fragment>
    </ShelvesLayout>
  );
};

ShelvesContainer.propTypes = {
  booksInShelves: PropTypes.object.isRequired,
  onSetBookShelf: PropTypes.func.isRequired
};

export default ShelvesContainer;
