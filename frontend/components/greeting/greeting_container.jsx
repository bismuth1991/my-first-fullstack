import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Greeting);

export default GreetingContainer;
