import React from 'react';
import NavLink from 'react-router-dom/NavLink';

const NavBar = () => (
  <span className="header-bottom nav-bar">
    <NavLink to="/home">Main</NavLink>
    <NavLink to="/search">Search Results</NavLink>
  </span>
);

export default NavBar;
