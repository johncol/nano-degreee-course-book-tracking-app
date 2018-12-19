import React from 'react';
import PropTypes from 'prop-types';

const NavBarContainer = ({ children }) => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light navigation">{children}</nav>
);

const NavBarTitle = ({ title }) => <a className="navbar-brand">{title}</a>;

const NavBarToggleButton = () => (
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
);

const NavBarLinks = ({ links }) => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {links.map((link, index) => (
        <li className="nav-item" key={index}>
          {link}
        </li>
      ))}
    </ul>
  </div>
);

const NavBar = props => {
  const { title, children } = props;

  return (
    <NavBarContainer>
      {title && <NavBarTitle title={title} />}
      <NavBarToggleButton />
      <NavBarLinks links={children} />
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  title: PropTypes.string
};

export default NavBar;
