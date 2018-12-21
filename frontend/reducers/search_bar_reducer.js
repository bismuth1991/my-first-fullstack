import { RECEIVE_QUERY_DATA } from '../actions/search_bar_actions';

const initialState = {
  songs: {},
  artists: [],
  albums: [],
  songIds: [],
};

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUERY_DATA: {
      return action.data;
    }
    default:
      return state;
  }
};

export default searchBarReducer;
