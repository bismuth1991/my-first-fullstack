import * as songApiUtil from '../util/song_utils';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs,
});

export const fetchSomeSongs = (offSet = 0) => dispatch => songApiUtil.fetchSomeSongs(offSet)
  .then(songs => dispatch(receiveSongs(songs)));
