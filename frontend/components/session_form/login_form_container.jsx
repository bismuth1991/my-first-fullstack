import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'LOG IN',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
});

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionForm);

export default LoginFormContainer;
