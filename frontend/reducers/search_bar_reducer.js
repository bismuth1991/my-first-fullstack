import {
  // RECEIVE_QUERY_SONGS,
  // RECEIVE_QUERY_ALBUMS,
  // RECEIVE_QUERY_ARTISTS,
  RECEIVE_QUERY_DATA,
} from '../actions/search_bar_actions';

const initialState = {
  songs: {},
  artists: [],
  albums: [],
  songIds: [],
  songsForShow: [],
};

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUERY_DATA: {
      const { songs, ...newState } = action.data;

      return newState;
    }
    default:
      return state;
  }
};

export default searchBarReducer;
