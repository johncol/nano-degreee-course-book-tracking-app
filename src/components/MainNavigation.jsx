import React from 'react';

import NavBar, { NavItem } from './common/NavBar';

const MainNavigation = () => {
  return (
    <NavBar title="My Book Tracking App">
      <NavItem exact to="/shelves">
        All books
      </NavItem>
      <NavItem to="/shelves/read">Read</NavItem>
      <NavItem to="/shelves/want-to-read">Want to read</NavItem>
      <NavItem to="/shelves/currently-reading">Currently reading</NavItem>
      <NavItem to="/search-books">Search books</NavItem>
    </NavBar>
  );
};

export default MainNavigation;
