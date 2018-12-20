import React from 'react';
import { connect } from 'react-redux';
import SongIndexHC from '../song_index_HC';
import { playSong, removeSongFromList, addSongsToList } from '../../actions/audio_player_actions';
import { createPlaylist, editPlaylist } from '../../actions/user_playlist_actions';

class UserPlaylistShow extends React.Component {
  componentDidUpdate() {
    console.log('I am updated');
  }

  render() {
    return <SongIndexHC {...this.props} type="playlist" />;
  }
}

const mapStateToProps = (state) => {
  const { entities: { songs } } = state;
  const { session: { currentUser, playlistSongs } } = state;

  const playingSongTitles = [];
  const playingSongIds = [];
  const playingSongs = [];

  for (let i = 0; i < Object.values(playlistSongs).length; i += 1) {
    const song = songs[Object.values(playlistSongs)[i].songId];

    playingSongs.push(song);
    playingSongTitles.push(song.title);
    playingSongIds.push(song.id);
  }


  return {
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
