import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShelvesLayout from './common/ShelvesLayout';
import ShelvesList from './ShelvesList';
import Shelf from './Shelf';

const ShelvesContainer = props => {
  const { booksInShelves, shelves } = props;
  return (
    <ShelvesLayout>
      <ShelvesList shelves={shelves} />
      <React.Fragment>
        <Route exact path="/shelves" render={() => <Shelf books={booksInShelves.all} />} />

        {shelves.map(shelf => (
          <Route
            key={shelf.id}
            path={'/shelves/' + shelf.path}
            render={() => <Shelf books={booksInShelves[shelf.id]} shelf={shelf} />}
          />
        ))}
      </React.Fragment>
    </ShelvesLayout>
  );
};

ShelvesContainer.propTypes = {
  booksInShelves: PropTypes.object.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ShelvesContainer;
