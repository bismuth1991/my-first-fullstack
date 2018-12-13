import * as songApiUitl from '../util/song_utils';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs,
});

export const fetchSomeSongs = () => dispatch => (
  songApiUitl.fetchSomeSongs()
    .then(songs => dispatch(receiveSongs(songs)))
);
