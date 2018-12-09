import * as SessionApiUtil from '../util/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const login = user => (dispatch) => {
  SessionApiUtil.login(user)
    .then(dispatch(receiveCurrentUser(user)));
};

export const logout = () => (dispatch) => {
  SessionApiUtil.logout()
    .then(dispatch(logoutCurrentUser()));
};

export const signup = user => (dispatch) => {
  SessionApiUtil.signup(user)
    .then(dispatch(receiveCurrentUser(user)));
};
