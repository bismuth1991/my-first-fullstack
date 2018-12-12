import * as songApiUitl from '../util/song_utils';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';

export const receiveAllSongs = songs => ({
  type: RECEIVE_ALL_SONGS,
  songs,
});

export const fetchAllSongs = () => dispatch => (
  songApiUitl.fetchAllSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
);
