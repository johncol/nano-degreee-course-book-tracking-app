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
      <a className="nav-link" href="https://github.com/johncol" target="_blank" rel="noopener noreferrer">
        Github
      </a>
      <a
        className="nav-link"
        href="https://www.linkedin.com/in/john-cely-45784226/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </NavBar>
  );
};

export default MainNavigation;
