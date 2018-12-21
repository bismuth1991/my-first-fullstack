import { RECEIVE_QUERY_DATA } from '../actions/search_bar_actions';
import { RECEIVE_SONGS, RECEIVE_QUERY_SONGS } from '../actions/song_actions';
import { SHOW_USER_PLAYLIST } from '../actions/user_playlist_actions';

const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.songs,
      };
    case RECEIVE_QUERY_SONGS:
      return {
        ...state,
        ...action.songs,
      };
    case SHOW_USER_PLAYLIST:
      return {
        ...state,
        ...action.playlist.songs,
      };
    default:
      return state;
  }
};

export default songsReducer;
