import { combineReducers } from 'redux';
import searchBarReducer from './search_bar_reducer';

const entitiesReducer = combineReducers({
  searchBar: searchBarReducer,
});

export default entitiesReducer;
