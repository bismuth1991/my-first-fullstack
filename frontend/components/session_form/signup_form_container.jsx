import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, clearErrors, login } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const demoUser = {
  email: 'demo@user.com',
  password: 'password',
};

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'SIGN UP',
});

const mapDispatchtoProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  loginDemoUser: () => dispatch(login(demoUser)),

  openOtherForm: () => dispatch(openModal('login')),
  closeModal: () => dispatch(closeModal()),
});

const SignupFormContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SessionForm);

export default SignupFormContainer;
