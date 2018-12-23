import React from 'react';

const ShelvesLayout = ({ children }) => {
  return (
    <div className="shelves-container row">
      <div className="col-sm-3 shelves-list-col">{children[0]}</div>
      <div className="col-sm-9 shelf-col">{children[1]}</div>
    </div>
  );
};

export default ShelvesLayout;
