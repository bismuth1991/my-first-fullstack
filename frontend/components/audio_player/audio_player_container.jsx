import { connect } from 'react-redux';
import Mp3Player from './audio_player';
import {
  addSongsToList,
  addSongToList,
  removeSongFromList,
  removeAllSongsFromList,
} from '../../actions/audio_player_actions';

const mapStateToProps = ({ session: { audioPlayer: currentlyPlayed, songList } }) => ({
  currentlyPlayed,
  songList,
});

const mapDispatchToProps = dispatch => ({
  addSongsTolist: songIds => dispatch(addSongsToList(songIds)),
  addSongToList: songId => dispatch(addSongToList(songId)),
  removeSongFromList: songId => dispatch(removeSongFromList(songId)),
  removeAllSongsFromList: () => dispatch(removeAllSongsFromList()),
});

const AudioPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mp3Player);

export default AudioPlayerContainer;
