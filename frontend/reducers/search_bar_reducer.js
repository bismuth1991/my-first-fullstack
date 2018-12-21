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
};

const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_QUERY_DATA:
      return action.data;
      // return {
      //   songs: Object.values(action.data.songs).map(song => song.id),
      //   artists: action.artists,
      //   album: action.albums,
      // };
    // case RECEIVE_QUERY_SONGS:
    //   return {
    //     ...state,
    //     songs: action.songs,
    //   };
    // case RECEIVE_QUERY_ARTISTS:
    //   return {
    //     ...state,
    //     artists: action.artists,
    //   };
    // case RECEIVE_QUERY_ALBUMS:
    //   return {
    //     ...state,
    //     albums: action.albums,
    //   };
    default:
      return state;
  }
};

export default searchBarReducer;
