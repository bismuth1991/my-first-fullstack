export const ADD_SONGS_TO_LIST = 'ADD_SONGS_TO_LIST';
export const ADD_SONG_TO_LIST = 'ADD_SONG_TO_LIST';
export const REMOVE_SONG_FROM_LIST = 'REMOVE_SONG_FROM_LIST';
export const REMOVE_ALL_SONGS_FROM_LIST = 'REMOVE_ALL_SONGS_FROM_LIST';
export const PLAY_SONG = 'PLAY_SONG';

export const playSong = (songId, playingSongIdx) => ({
  type: PLAY_SONG,
  songId,
  playingSongIdx,
});

export const addSongsToList = songIds => ({
  type: ADD_SONGS_TO_LIST,
  songIds,
});

export const addSongToList = songId => ({
  type: ADD_SONG_TO_LIST,
  songId,
});

export const removeSongFromList = songId => ({
  type: REMOVE_SONG_FROM_LIST,
  songId,
});

export const removeAllSongsFromList = () => ({
  type: REMOVE_ALL_SONGS_FROM_LIST,
});
