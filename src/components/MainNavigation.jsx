import React from 'react';
import { NavLink } from 'react-router-dom';

import NavBar from './common/NavBar';

const MainNavigation = () => {
  return (
    <NavBar title="My Book Tracking App">
      <NavLink to="/shelves" className="nav-link">
        Shelves
      </NavLink>
      <NavLink to="/search-books" className="nav-link">
        Search books
      </NavLink>
      <NavLink to="/manage-shelves" className="nav-link disabled">
        Manage Shelves
      </NavLink>
    </NavBar>
  );
};

export default MainNavigation;
