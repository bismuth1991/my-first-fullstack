import React from 'react';
import SearchBarContainer from '../search_bar/search_bar_container';
import GreetingContainer from '../greeting/greeting_container';
import HeaderLogo from './header_logo';
import NavBar from './nav_bar';

const Header = () => (
  <div className="container header">
    <HeaderLogo />
    <div className="header-middle">
      <SearchBarContainer />
    </div>
    <GreetingContainer />
  </div>
);

export default Header;
