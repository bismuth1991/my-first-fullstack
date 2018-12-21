import React from 'react';
import { connect } from 'react-redux';
// import { withCookies } from 'react-cookie';
import SongsContainer from '../songs_container';
import UserPlaylistForm from './user_playlist_form';
import { playSong, removeSongFromList, addSongsToList } from '../../actions/audio_player_actions';
import { createPlaylist, editPlaylist, fetchUserPlaylist } from '../../actions/user_playlist_actions';
import { receiveSongs } from '../../actions/song_actions';
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

  // const playingSongTitles = [];
  const playingSongIds = [];
  const playingSongs = [];

  for (let i = 0; i < Object.values(playlistSongs).length; i += 1) {
    const song = songs[Object.values(playlistSongs)[i].songId];

    playingSongs.push(song);
    // playingSongTitles.push(song.title);
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
    // playingSongTitles,
    playingSongIds,
    userId: currentUser.id,
    playlistSongs: Object.values(playlistSongs),
  };
};

const mapDispatchToProps = dispatch => ({
  // receiveSongs: songs => dispatch(receiveSongs(songs)),
  // playSong: (songId, playingSongIdx) => dispatch(playSong(songId, playingSongIdx)),
  // removeSongFromList: songId => dispatch(removeSongFromList(songId)),
  savePlaylist: (name, userId, songIds) => dispatch(createPlaylist(name, userId, songIds)),
  editPlaylist: (playlistId, name, userId, songIds) => dispatch(editPlaylist(playlistId, name, userId, songIds)),
  // addSongsToAudioPlayer: songIds => dispatch(addSongsToList(songIds)),
  fetchUserPlaylist: playlistId => dispatch(fetchUserPlaylist(playlistId)),
  removePlaylistSong: playlistSongId => dispatch(removePlaylistSong(playlistSongId)),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(UserPlaylistShow);
