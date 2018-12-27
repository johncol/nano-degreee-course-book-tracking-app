import React from 'react';

const Notification = ({ children }) => {
  return (
    <div className="notification alert alert-info" role="alert">
      {children}
    </div>
  );
};

export default Notification;
