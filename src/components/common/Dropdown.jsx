import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = props => {
  const { dropdownId, className, label, selected, selectedOptionProp, optionsLabelProp, items, onItemSelected } = props;
  const fullDropdownId = 'dropdownMenuButton-' + dropdownId;
  return (
    <div className={'dropdown ' + className}>
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id={fullDropdownId}
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {label}
      </button>
      <div className="dropdown-menu" aria-labelledby={fullDropdownId}>
        {items.map(item => (
          <button
            key={item.id}
            type="button"
            className={'dropdown-item' + (item[selectedOptionProp] === selected ? ' selected-item' : '')}
            onClick={() => onItemSelected(item)}
          >
            {item[optionsLabelProp]}
          </button>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};

export default Dropdown;
