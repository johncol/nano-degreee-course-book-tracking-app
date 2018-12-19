import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShelvesList from './ShelvesList';
import Shelf from './Shelf';

const ShelvesContainer = props => {
  const { books, shelves } = props;
  return (
    <div className="shelves-container row">
      <div className="col-sm-3">
        <ShelvesList shelves={shelves} />
      </div>

      <div className="col-sm-9">
        <Route exact path="/shelves" render={() => <Shelf books={books} />} />

        <Route
          path="/shelves/want-to-read"
          render={() => <Shelf books={books.slice(0, 2)} shelf={shelves[0]} />}
        />
        <Route
          path="/shelves/currently-reading"
          render={() => <Shelf books={books.slice(2, 4)} shelf={shelves[1]} />}
        />
        <Route
          path="/shelves/read"
          render={() => <Shelf books={books.slice(4)} shelf={shelves[2]} />}
        />
      </div>
    </div>
  );
};

ShelvesContainer.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ShelvesContainer;
