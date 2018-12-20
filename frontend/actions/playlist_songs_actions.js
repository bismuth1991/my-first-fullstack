export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS';

export const receivePlaylistSongs = playlistSongs => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs,
});
