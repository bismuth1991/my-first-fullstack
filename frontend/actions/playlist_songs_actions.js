export const RECEIVE_PLAYLIST_SONGS = 'RECEIVE_PLAYLIST_SONGS';
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG';

export const receivePlaylistSongs = playlistSongs => ({
  type: RECEIVE_PLAYLIST_SONGS,
  playlistSongs,
});

export const removePlaylistSong = songId => ({
  type: REMOVE_PLAYLIST_SONG,
  songId,
});
