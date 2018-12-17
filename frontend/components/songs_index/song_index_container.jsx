import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { playSong, addSongToList } from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities: { songs }, session: { audioPlayer } }) => {
  let playingSongs = audioPlayer;

  if (playingSongs.length !== 0) {
    playingSongs = playingSongs.map(songId => songs[songId].title);
  }

  return {
    songs: Object.values(songs),
    playingSongs,
  };
};

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
  playSong: (songId, playingSongId) => dispatch(playSong(songId, playingSongId)),
  addSongToList: songId => dispatch(addSongToList(songId)),
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndex);


export default SongIndexContainer;
