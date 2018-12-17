import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import Mp3Player from './audio_player';
import {
  addSongsToList,
  addSongToList,
  removeSongFromList,
  removeAllSongsFromList,
} from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities: { songs }, session: { audioPlayer } }) => {
  let songList = audioPlayer;

  if (Object.values(songs).length === 0) {
    songList = [];
  } else {
    songList = songList.map((songId) => {
      const song = songs[songId];
      return {
        src: song.url,
        title: song.title,
        artist: song.artist,
      };
    });
  }

  return {
    songList,
  };
};

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

export default withCookies(AudioPlayerContainer);
