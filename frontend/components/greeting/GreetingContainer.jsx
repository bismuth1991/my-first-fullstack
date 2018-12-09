import { connect } from 'react-redux';
import logout from '../../actions/session_actions';
import Greeting from './Greeting';

const mapStateToProps = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Greeting);

export default GreetingContainer;
