import * as SessionApiUtil from '../util/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const login = user => dispatch => (
  SessionApiUtil.login(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON)),
    )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user)
    .then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON)),
    )
);
