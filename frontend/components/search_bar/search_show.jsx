import React from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { receiveSongs } from '../../actions/song_actions';
import SongsContainer from '../songs_container';
import { playSong, addSongToList, addSongsToList } from '../../actions/audio_player_actions';

const SearchShow = props => (
  <SongsContainer {...props} />
);

const mapStateToProps = ({ entities: { songs, searchBar: { songIds } } }) => ({
  songs: songIds.map(songId => songs[songId]),
});

// const mapDispatchToProps = dispatch => ({
// receiveSongs: songs => dispatch(receiveSongs(songs)),
// playSong: (songId, playingSongId) => dispatch(playSong(songId, playingSongId)),
// addSongToList: songId => dispatch(addSongToList(songId)),
// addSongsToList: songIds => dispatch(addSongsToList(songIds)),
// addSongsToAudioPlayer: songIds => dispatch(addSongsToList(songIds)),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  null,
)(SearchShow);
