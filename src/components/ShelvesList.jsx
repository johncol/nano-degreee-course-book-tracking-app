import React from 'react';
import { NavLink } from 'react-router-dom';

import Shelves from '../constants/Shelves';

const ShelvesList = () => {
  return (
    <ul className="list-group list-group-flush shelves-list">
      {Shelves.map(shelf => (
        <li key={shelf.id} className="list-group-item">
          <NavLink to={`/shelves/${shelf.path}`}>{shelf.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

ShelvesList.propTypes = {};

export default ShelvesList;
