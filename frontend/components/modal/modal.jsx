import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

const Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" role="presentation" onClick={closeModal}>
      <div className="modal-child" role="presentation" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = ({ ui: { modal } }) => ({
  modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);

export default ModalContainer;
