import React from 'react';

const Dropdown = props => {
  const { dropdownId, className, label, selected, selectedOptionProp, optionsLabelProp, items } = props;
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
            type="button"
            className={'dropdown-item' + (item[selectedOptionProp] === selected ? ' selected-item' : '')}
          >
            {item[optionsLabelProp]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
