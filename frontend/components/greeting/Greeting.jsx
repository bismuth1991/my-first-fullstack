import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const { openModal } = this.props;
    openModal(e.target.name);
  }

  render() {
    const guestGreeting = () => (
      <div className="greeting-container">
        <div className="user-logo dropdown">
          <ul className="dropdown-content">
            <li><a href="#/" onClick={this.handleClick} name="login">Log In</a></li>
            <li><a href="#/" onClick={this.handleClick} name="signup">Sign Up</a></li>
          </ul>
        </div>

        <p>Welcome, Guest!</p>
      </div>
    );

    const { currentUser, logout } = this.props;

    const personalGreeting = () => (
      <div className="greeting-container">
        <div className="user-logo dropdown">
          <button className="dropdown-content" type="button" onClick={logout}>Log Out</button>
        </div>

        <p>
          Hello,
          {' '}
          {currentUser.email}
        </p>

      </div>
    );

    return currentUser.id !== null ? personalGreeting() : guestGreeting();
  }
}

Greeting.defaultProps = {
  currentUser: {
    id: null,
    email: null,
  },
};

Greeting.propTypes = {
  currentUser: propTypes.shape({
    id: propTypes.number,
    email: propTypes.string,
  }),
  logout: propTypes.func.isRequired,
};


export default Greeting;
