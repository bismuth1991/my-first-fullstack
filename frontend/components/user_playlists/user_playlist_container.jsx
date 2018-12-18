import { connect } from 'react-redux';
import { fetchUserPlaylists } from '../../actions/user_playlist_actions';
import UserPlaylist from './user_playlist';

const mapStateToProps = ({ entities: { playlists } }) => ({
  playlists,
});

const mapDispatchToProps = dispatch => ({
  fetchUserPlaylists: playlists => dispatch(fetchUserPlaylists(playlists)),
});

const UserPlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylist);


export default UserPlaylistContainer;
