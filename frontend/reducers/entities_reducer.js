import { combineReducers } from 'redux';
import searchBarReducer from './search_bar_reducer';
import songsReducer from './songs_reducer';

const entitiesReducer = combineReducers({
  searchBar: searchBarReducer,
  songs: songsReducer,
});

export default entitiesReducer;
