import React from 'react';

const Notification = ({ children, onHide, millis = 1000 }) => {
  setTimeout(onHide, millis);
  return (
    <div className="notification alert alert-info" role="alert">
      {children}
    </div>
  );
};

export default Notification;
