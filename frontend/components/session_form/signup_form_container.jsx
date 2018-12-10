import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'SIGN UP',
});

const mapDispatchtoProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SessionForm);

export default SignupFormContainer;
