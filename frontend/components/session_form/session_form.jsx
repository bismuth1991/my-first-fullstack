import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const navLogIn = document.getElementById('form-nav-login');
    const navSignUp = document.getElementById('form-nav-signup');
    const { formType, clearErrors } = this.props;

    clearErrors();

    if (formType === 'LOG IN') {
      navLogIn.classList.add('active');
      navSignUp.classList.remove('active');
    } else {
      navLogIn.classList.remove('active');
      navSignUp.classList.add('active');
    }
  }

  handleChange(inputField) {
    return e => this.setState({
      [inputField]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { processForm } = this.props;
    const user = { ...this.state };

    processForm(user);

    this.setState({
      email: '',
      password: '',
    });
  }

  renderErrors() {
    const { errors } = this.props;

    return (
      <label>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
      </label>
    );
  }

  render() {
    const { email, password } = this.state;
    const { formType, loginDemoUser } = this.props;

    return (
      <div className="form">
        <div className="form-container">

          <nav className="form-nav">
            <ul>
              <li id="form-nav-login">
                {/* <a href="#">LOG IN</a> */}
                <Link className="form-nav-tab" to="/login">LOG IN</Link>
                <span className="form-nav-line" />
              </li>

              <li id="form-nav-signup">
                {/* <a href="#">SIGN UP</a> */}
                <Link className="form-nav-tab" to="/signup">SIGN UP</Link>
                <span className="form-nav-line" />
              </li>
            </ul>
          </nav>

          <form className="form-session" onSubmit={this.handleSubmit}>
            <label>
              {/* <i className="fas fa-at" /> */}
              <input
                type="text"
                placeholder="EMAIL"
                value={email}
                onChange={this.handleChange('email')}
              />
            </label>

            <label>
              {/* <i className="fas fa-unlock-alt" /> */}
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={this.handleChange('password')}
              />
            </label>

            {this.renderErrors()}

            <button type="submit">{formType}</button>
          </form>
        </div>

        <button
          className="demo-button"
          type="submit"
          onClick={loginDemoUser}
        >
          DEMO LOGIN
        </button>
      </div>
    );
  }
}

SessionForm.propTypes = {
  formType: propTypes.string.isRequired,
  errors: propTypes.arrayOf(propTypes.string).isRequired,
  processForm: propTypes.func.isRequired,
  clearErrors: propTypes.func.isRequired,
  loginDemoUser: propTypes.func.isRequired,
};

export default SessionForm;
