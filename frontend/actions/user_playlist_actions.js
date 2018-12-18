import * as userPlaylistApiUtil from '../util/user_playlist_utils';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';

export const receiveUserPlaylists = userPlaylists => ({
  type: RECEIVE_USER_PLAYLISTS,
  userPlaylists,
});

export const fetchUserPlaylists = () => dispatch => (
  userPlaylistApiUtil.fetchUserPlaylists()
    .then(userPlaylists => dispatch(receiveUserPlaylists(userPlaylists)))
);
