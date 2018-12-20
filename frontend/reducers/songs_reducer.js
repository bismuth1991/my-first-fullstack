import { RECEIVE_SONGS, RECEIVE_QUERY_SONGS } from '../actions/song_actions';
import { RECEIVE_USER_PLAYLIST } from '../actions/user_playlist_actions';

const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.songs,
      };
    case RECEIVE_QUERY_SONGS:
      return action.songs;
    case RECEIVE_USER_PLAYLIST:
      return {
        ...state,
        ...action.playlist.songs,
      };
    default:
      return state;
  }
};

export default songsReducer;
