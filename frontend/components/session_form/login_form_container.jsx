import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const demoUser = {
  email: 'demo@user.com',
  password: 'password',
};

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'LOG IN',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  loginDemoUser: () => dispatch(login(demoUser)),
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);

export default LoginFormContainer;
