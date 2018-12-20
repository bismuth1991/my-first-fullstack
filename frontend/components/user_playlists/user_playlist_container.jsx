import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserPlaylists, fetchUserPlaylist } from '../../actions/user_playlist_actions';
import UserPlaylistIndex from './user_playlist_index';
import { addSongsToList } from '../../actions/audio_player_actions';

const mapStateToProps = ({ session: { userPlaylists, currentUser } }) => ({
  userPlaylists: Object.values(userPlaylists).reverse(),
  currentUser,
});

const mapDispatchToProps = dispatch => ({
  fetchUserPlaylists: () => dispatch(fetchUserPlaylists()),
  fetchUserPlaylist: playlistId => dispatch(fetchUserPlaylist(playlistId)),
  addSongsToList: songIds => dispatch(addSongsToList(songIds)),
});

const UserPlaylistContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserPlaylistIndex);


export default withRouter(UserPlaylistContainer);
