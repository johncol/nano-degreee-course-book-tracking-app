import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const NavBar = props => {
  const { title, children } = props;

  return (
    <NavBarWrapper>
      {title && <Title title={title} />}
      <ToggleNavBtn />
      <NavLinks links={children} />
    </NavBarWrapper>
  );
};

NavBar.propTypes = {
  title: PropTypes.string
};

const NavBarWrapper = ({ children }) => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light navigation">{children}</nav>
);

const Title = ({ title }) => (
  <Link className="navbar-brand" to="/">
    {title}
  </Link>
);

const ToggleNavBtn = () => (
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

export const NavItem = props => <NavLink {...props} className="nav-link" />;

const NavLinks = ({ links }) => (
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

export default NavBar;
