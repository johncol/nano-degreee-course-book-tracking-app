import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const ShelvesList = props => {
  const { shelves } = props;
  return (
    <ul className="list-group list-group-flush shelves-list">
      {shelves.map(shelf => (
        <li key={shelf.id} className="list-group-item">
          <NavLink to={`/shelves/${shelf.path}`}>{shelf.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

ShelvesList.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ShelvesList;
