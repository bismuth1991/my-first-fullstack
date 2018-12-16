import { combineReducers } from 'redux';
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import audioPlayerReducer from './audio_player_reducer';

const nullUser = {
  id: null,
  email: null,
};

const sessionReducer = (state = nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { ...action.currentUser };
    case LOGOUT_CURRENT_USER:
      return nullUser;
    default:
      return state;
  }
};

export default combineReducers({
  currentUser: sessionReducer,
  audioPlayer: audioPlayerReducer,
});
