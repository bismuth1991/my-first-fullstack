import * as userPlaylistApiUtil from '../util/user_playlist_utils';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';

export const receiveUserPlaylists = playlists => ({
  type: RECEIVE_USER_PLAYLISTS,
  playlists,
});

export const fetchUserPlaylists = () => dispatch => (
  userPlaylistApiUtil.fectchUserPlaylists()
    .then(playlists => dispatch(receiveUserPlaylists(playlists)))
);
