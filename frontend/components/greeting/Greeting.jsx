import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    const guestGreeting = () => (
      <div className="greeting-container">
        <div className="user-logo dropdown">
          <ul className="dropdown-content">
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
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
