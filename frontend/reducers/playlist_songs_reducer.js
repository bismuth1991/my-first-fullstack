// import { RECEIVE_PLAYLIST_SONGS } from '../actions/playlist_songs_actions';
import { RECEIVE_USER_PLAYLIST } from '../actions/user_playlist_actions';

const playlistSongsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_PLAYLIST:
      // return {
      //   ...state,
      //   ...action.playlistSongs,
      // };
      return action.playlist.playlistSongs;
    default:
      return state;
  }
};

export default playlistSongsReducer;
