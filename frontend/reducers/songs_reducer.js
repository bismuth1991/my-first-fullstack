import { RECEIVE_SONGS, RECEIVE_QUERY_SONGS } from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return {
        ...state,
        ...action.songs,
      };
    case RECEIVE_QUERY_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default songsReducer;
