import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { fetchSomeSongs, receiveSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { playSong, addSongToList, addSongsToList } from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities: { songs }, session: { audioPlayer } }) => ({
  songs: Object.values(songs),
  // playingSongs,
});
const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
  // receiveSongs: songs => dispatch(receiveSongs(songs)),
  // playSong: (songId, playingSongId) => dispatch(playSong(songId, playingSongId)),
  // addSongToList: songId => dispatch(addSongToList(songId)),
  // addSongsToList: songIds => dispatch(addSongsToList(songIds)),
  // addSongsToAudioPlayer: songIds => dispatch(addSongsToList(songIds)),
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndex);


export default SongIndexContainer;
