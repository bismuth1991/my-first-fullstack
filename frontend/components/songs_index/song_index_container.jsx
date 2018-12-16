import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { playSong, addSongToList } from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities: { songs } }) => ({
  songs: Object.values(songs),
});

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
  playSong: songId => dispatch(playSong(songId)),
  addSongToList: songId => dispatch(addSongToList(songId)),
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndex);


export default SongIndexContainer;
