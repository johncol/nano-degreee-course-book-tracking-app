import React from 'react';
import PropTypes from 'prop-types';

const ShelvesList = props => {
  const { shelves } = props;
  return (
    <ul className="list-group list-group-flush shelves-list">
      {shelves.map(shelf => (
        <li key={shelf.id} className="list-group-item">
          {shelf.name}
        </li>
      ))}
    </ul>
  );
};

ShelvesList.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ShelvesList;
