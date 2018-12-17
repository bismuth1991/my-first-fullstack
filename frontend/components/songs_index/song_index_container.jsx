import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { fetchSomeSongs, receiveSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { playSong, addSongToList, addSongsToList } from '../../actions/audio_player_actions';

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
  receiveSongs: songs => dispatch(receiveSongs(songs)),
  playSong: (songId, playingSongId) => dispatch(playSong(songId, playingSongId)),
  addSongToList: songId => dispatch(addSongToList(songId)),
  addSongsToList: songIds => dispatch(addSongsToList(songIds)),
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndex);


export default withCookies(SongIndexContainer);
