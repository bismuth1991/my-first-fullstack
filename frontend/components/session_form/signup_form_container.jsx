import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../util/session_api_utils';

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
