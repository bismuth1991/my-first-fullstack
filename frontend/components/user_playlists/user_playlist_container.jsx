import { connect } from 'react-redux';
import { fetchUserPlaylists } from '../../actions/user_playlist_actions';
import UserPlaylistIndex from './user_playlist_index';

const mapStateToProps = ({ session: { userPlaylists } }) => ({
  userPlaylists: Object.values(userPlaylists),
});

const mapDispatchToProps = dispatch => ({
  fetchUserPlaylists: () => dispatch(fetchUserPlaylists()),
});

const UserPlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylistIndex);


export default UserPlaylistContainer;
