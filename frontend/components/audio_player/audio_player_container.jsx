import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import Mp3Player from './audio_player';
import {
  addSongsToList,
  addSongToList,
  removeSongFromList,
  removeAllSongsFromList,
} from '../../actions/audio_player_actions';

const mapStateToProps = (state) => {
  const { entities: { songs } } = state;
  let { audio: { currentlyPlayed, songList } } = state;

  if (Object.values(songs).length === 0) {
    songList = [];
  } else {
    currentlyPlayed = songs[currentlyPlayed];

    // songList = songList.map(songId => songs[songId])
    //   .map(song => Object.assign({}, {
    //     src: song.url,
    //     title: song.title,
    //     artist: song.artist,
    //   }));

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
    currentlyPlayed,
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
