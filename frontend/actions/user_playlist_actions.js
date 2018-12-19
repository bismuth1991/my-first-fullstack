import * as userPlaylistApiUtil from '../util/user_playlist_utils';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_USER_PLAYLIST = 'REVEIVE_USER_PLAYLIST';

export const receiveUserPlaylists = userPlaylists => ({
  type: RECEIVE_USER_PLAYLISTS,
  userPlaylists,
});

export const receiveUserPlaylist = userPlaylist => ({
  type: RECEIVE_USER_PLAYLIST,
  userPlaylist,
});

export const fetchUserPlaylists = () => dispatch => (
  userPlaylistApiUtil.fetchUserPlaylists()
    .then(userPlaylists => dispatch(receiveUserPlaylists(userPlaylists)))
);

export const createPlaylist = (name, userId, songIds) => dispatch => (
  userPlaylistApiUtil.createPlaylist(name, userId, songIds)
    .then(newPlaylist => dispatch(receiveUserPlaylist(newPlaylist)))
);
