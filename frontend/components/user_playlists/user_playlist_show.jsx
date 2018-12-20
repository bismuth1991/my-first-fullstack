import React from 'react';
import { connect } from 'react-redux';
import SongIndexHC from '../song_index_HC';
import { playSong, removeSongFromList, addSongsToList } from '../../actions/audio_player_actions';
import { createPlaylist, editPlaylist } from '../../actions/user_playlist_actions';

class UserPlaylistShow extends React.Component {
  componentDidUpdate() {

  }

  render() {
    return <SongIndexHC {...this.props} />;
    // return <h1>Test</h1>;
  }
}

const mapStateToProps = (state) => {
  const { entities: { songs } } = state;
  const { session: { currentUser, playlistSongs } } = state;

  const playingSongTitles = [];
  const playingSongIds = [];
  const playingSongs = [];

  for (let i = 0; i < Object.values(playlistSongs).length; i += 1) {
    // debugger;
    const song = songs[Object.values(playlistSongs)[i].songId];

    playingSongs.push(song);
    playingSongTitles.push(song.title);
    playingSongIds.push(song.id);
  }

  // if (Object.values(songs).length === 0) {
  //   playingSongTitles = [];
  // } else {
  //   playingSongTitles = audioPlayer.map(songId => (songs[songId].title));
  // }

  return {
    // songs: Object.values(playlistSongs).map(playlistSong => songs[playlistSong.songId]),
    songs: playingSongs,
    playingSongTitles,
    playingSongIds,
    userId: currentUser.id,
  };
};

const mapDispatchToProps = dispatch => ({
  playSong: (songId, playingSongIdx) => dispatch(playSong(songId, playingSongIdx)),
  removeSongFromList: songId => dispatch(removeSongFromList(songId)),
  savePlaylist: (name, userId, songIds) => dispatch(createPlaylist(name, userId, songIds)),
  editPlaylist: (name, userId, songIds) => dispatch(editPlaylist(name, userId, songIds)),
  addSongsToAudioPlayer: songIds => dispatch(addSongsToList(songIds)),
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(UserPlaylistShow);
