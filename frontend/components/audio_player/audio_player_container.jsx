import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import Mp3Player from './audio_player';
import { createPlaylist } from '../../actions/user_playlist_actions';
import {
  addSongsToList,
  addSongToList,
  removeSongFromList,
  removeAllSongsFromList,
  playSong,
} from '../../actions/audio_player_actions';

const mapStateToProps = ({ entities: { songs }, session: { audioPlayer, currentUser } }) => {
  let songList = audioPlayer;
  let audioPlayerCookies = [];
  const songsCookies = {};

  if (Object.values(songs).length === 0) {
    songList = [];
  } else {
    // set cookies to persist playlist on refresh
    audioPlayerCookies = songList;
    songList.forEach((songId) => {
      songsCookies[songId] = songs[songId];
    });

    // transform state to data audioPlayer can intepret
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
    audioPlayerCookies,
    songsCookies: { ...songsCookies },
    userId: currentUser.id,
  };
};

const mapDispatchToProps = dispatch => ({
  addSongsTolist: songIds => dispatch(addSongsToList(songIds)),
  addSongToList: songId => dispatch(addSongToList(songId)),
  removeSongFromList: songId => dispatch(removeSongFromList(songId)),
  removeAllSongsFromList: () => dispatch(removeAllSongsFromList()),
  playSong: (songId, playingSongIdx) => dispatch(playSong(songId, playingSongIdx)),
  createPlaylist: (name, userId, songIds) => dispatch(createPlaylist(name, userId, songIds)),
});

const AudioPlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mp3Player);

export default withCookies(AudioPlayerContainer);
