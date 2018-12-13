import React from 'react';

class HeaderLogo extends React.Component {
  static handleClick() {
    window.location.hash = '/';
  }

  render() {
    return (
      <div
        className="header-logo"
        role="presentation"
        onClick={HeaderLogo.handleClick}
      />
    );
  }
}

export default HeaderLogo;
