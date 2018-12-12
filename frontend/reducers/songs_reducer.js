import { RECEIVE_ALL_SONGS } from '../actions/song_actions';

const songsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_SONGS:
      return action.songs;
    default:
      return state;
  }
};

export default songsReducer;
