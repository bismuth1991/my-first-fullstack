import { connect } from 'react-redux';
import { receiveSongs } from '../actions/song_actions';
import {
  playSong, addSongsToList, addSongToList, removeSongFromList,
} from '../actions/audio_player_actions';
import Songs from './songs';

const mapStateToprops = (state) => {
  const { session: { audioPlayer } } = state;
  const { songs } = state;

  const curentlyPlayingTitles = audioPlayer.map(songId => songs[songId].title);

  return {
    curentlyPlayingTitles,
  };
};

const mapDispatchToProps = dispatch => ({
  receiveSongs: songs => dispatch(receiveSongs(songs)),
  playSong: (songId, currentlyPlayingIdx) => dispatch(playSong(songId, currentlyPlayingIdx)),
  addSongsToList: songIds => dispatch(addSongsToList(songIds)),
  addSongToList: songId => dispatch(addSongToList(songId)),
  removeSongFromList: songId => dispatch(removeSongFromList(songId)),
});

const SongsContainer = connect(
  mapStateToprops,
  mapDispatchToProps,
)(Songs);

export default SongsContainer;
