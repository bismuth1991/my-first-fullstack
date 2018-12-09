import React from 'react';
import { Link } from 'react-router-dom';

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
  }

  renderErrors() {
    const { errors } = this.props;

    return (
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }

  render() {
    const { email, password } = this.state;
    const { formType } = this.props;

    return (
      <div className="form">
        <div className="form-container">

          <nav className="form-nav">
            <ul>
              <li className="active">
                {/* <a href="#">LOG IN</a> */}
                <Link className="form-nav-tab" to="/login">LOG IN</Link>
                <span className="form-nav-line" />
              </li>

              <li>
                {/* <a href="#">SIGN UP</a> */}
                <Link className="form-nav-tab" to="/signup">SIGN UP</Link>
                <span className="form-nav-line" />
              </li>
            </ul>
          </nav>

          <form className="form-session" onSubmit={this.handleSubmit}>
            <label>
              <i className="fas fa-at" />
              <input
                type="text"
                placeholder="EMAIL"
                value={email}
                onChange={this.handleChange('email')}
              />
            </label>

            <label>
              <i className="fas fa-unlock-alt" />
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={this.handleChange('password')}
              />
            </label>

            <button type="submit">{formType}</button>
          </form>

        </div>
      </div>
    );
  }
}
