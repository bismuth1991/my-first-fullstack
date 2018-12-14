import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
});

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Greeting);

export default GreetingContainer;
