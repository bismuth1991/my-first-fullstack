// import { RECEIVE_PLAYLIST_SONGS } from '../actions/playlist_songs_actions';
import { SHOW_USER_PLAYLIST } from '../actions/user_playlist_actions';

const playlistSongsReducer = (state = {}, action) => {
  debugger;
  switch (action.type) {
    case SHOW_USER_PLAYLIST:
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
