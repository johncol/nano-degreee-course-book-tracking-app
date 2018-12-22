import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShelvesList from './ShelvesList';
import Shelf from './Shelf';

const ShelvesContainer = props => {
  const { booksInShelves, shelves } = props;
  return (
    <div className="shelves-container row">
      <div className="col-sm-3">
        <ShelvesList shelves={shelves} />
      </div>

      <div className="col-sm-9">
        <Route exact path="/shelves" render={() => <Shelf books={booksInShelves.all} />} />

        {shelves.map(shelf => (
          <Route
            key={shelf.id}
            path={'/shelves/' + shelf.path}
            render={() => <Shelf books={booksInShelves[shelf.id]} shelf={shelf} />}
          />
        ))}
      </div>
    </div>
  );
};

ShelvesContainer.propTypes = {
  booksInShelves: PropTypes.object.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ShelvesContainer;
