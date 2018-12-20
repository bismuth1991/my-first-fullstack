import * as userPlaylistApiUtil from '../util/user_playlist_utils';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_USER_PLAYLIST = 'RECEIVE_USER_PLAYLIST';
export const SHOW_USER_PLAYLIST = 'SHOW_USER_PLAYLIST';
export const REMOVE_USER_PLAYLIST = 'REMOVE_USER_PLAYLIST';

export const receiveUserPlaylists = userPlaylists => ({
  type: RECEIVE_USER_PLAYLISTS,
  userPlaylists,
});

export const receiveUserPlaylist = playlist => ({
  type: RECEIVE_USER_PLAYLIST,
  playlist,
});

export const showUserPlaylist = playlist => ({
  type: SHOW_USER_PLAYLIST,
  playlist,
});

export const removeUserPlaylist = playlistId => ({
  type: REMOVE_USER_PLAYLIST,
  playlistId,
});

export const fetchUserPlaylists = () => dispatch => (
  userPlaylistApiUtil.fetchUserPlaylists()
    .then(userPlaylists => dispatch(receiveUserPlaylists(userPlaylists)))
);

export const createPlaylist = (name, userId, songIds) => dispatch => (
  userPlaylistApiUtil.createPlaylist(name, userId, songIds)
    .then(newPlaylist => dispatch(receiveUserPlaylist(newPlaylist)))
);

export const editPlaylist = (name, userId, songIds) => dispatch => (
  userPlaylistApiUtil.editPlaylist(name, userId, songIds)
    .then(newPlaylist => dispatch(receiveUserPlaylist(newPlaylist)))
);

export const deleteUserPlaylist = playlistId => dispatch => (
  userPlaylistApiUtil.deletePlaylist(playlistId)
    .then(deletedPlaylistId => dispatch(removeUserPlaylist(deletedPlaylistId)))
);

export const fetchUserPlaylist = playlistId => dispatch => userPlaylistApiUtil.fetchUserPlaylist(playlistId)
  .then(playlist => dispatch(showUserPlaylist(playlist)));
