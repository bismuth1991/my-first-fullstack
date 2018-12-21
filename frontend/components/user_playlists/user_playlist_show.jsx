import React from 'react';
import { connect } from 'react-redux';
import SongsContainer from '../songs_container';
import UserPlaylistForm from './user_playlist_form';
import { createPlaylist, editPlaylist, fetchUserPlaylist } from '../../actions/user_playlist_actions';
import { removePlaylistSong } from '../../actions/playlist_songs_actions';

class UserPlaylistShow extends React.Component {
  componentDidMount() {
    const { playlistId } = this.props;
    const { fetchUserPlaylist } = this.props;

    fetchUserPlaylist(playlistId);
  }

  render() {
    return (
      <>
        <UserPlaylistForm {...this.props} />
        <SongsContainer {...this.props} />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { playlistId } } } = ownProps;
  const { entities: { songs } } = state;
  const { session: { currentUser, playlistSongs, userPlaylists } } = state;

  const playingSongIds = [];
  const playingSongs = [];

  for (let i = 0; i < Object.values(playlistSongs).length; i += 1) {
    const song = songs[Object.values(playlistSongs)[i].songId];

    playingSongs.push(song);
    playingSongIds.push(song.id);
  }

  let playlistName;
  if (Object.values(userPlaylists).length !== 0) {
    playlistName = userPlaylists[playlistId].name;
  }

  return {
    playlistId,
    playlistName,
    songs: playingSongs,
    playingSongIds,
    userId: currentUser.id,
    playlistSongs: Object.values(playlistSongs),
  };
};

const mapDispatchToProps = dispatch => ({
  savePlaylist: (name, userId, songIds) => dispatch(createPlaylist(name, userId, songIds)),
  editPlaylist: (playlistId, name, userId, songIds) => dispatch(editPlaylist(playlistId, name, userId, songIds)),
  fetchUserPlaylist: playlistId => dispatch(fetchUserPlaylist(playlistId)),
  removePlaylistSong: playlistSongId => dispatch(removePlaylistSong(playlistSongId)),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(UserPlaylistShow);
