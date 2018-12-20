import * as userPlaylistApiUtil from '../util/user_playlist_utils';
import { receiveSongs } from './song_actions';
import { receivePlaylistSongs } from './playlist_songs_actions';

export const RECEIVE_USER_PLAYLISTS = 'RECEIVE_USER_PLAYLISTS';
export const RECEIVE_USER_PLAYLIST = 'REVEIVE_USER_PLAYLIST';

export const receiveUserPlaylists = userPlaylists => ({
  type: RECEIVE_USER_PLAYLISTS,
  userPlaylists,
});

export const receiveUserPlaylist = playlist => ({
  type: RECEIVE_USER_PLAYLIST,
  playlist,
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

export const fetchUserPlaylist = playlistId => (dispatch) => {
  debugger;
  return userPlaylistApiUtil.fetchUserPlaylist(playlistId)
    // .then(playlist => dispatch(receiveSongs(playlist.songs)))
    // .then(playlist => dispatch(receivePlaylistSongs(playlist.playlistSongs)));
    .then(playlist => dispatch(receiveUserPlaylist(playlist)));
};
