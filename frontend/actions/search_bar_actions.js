import * as SearchBarApiUtil from '../util/search_bar_util';

export const RECEIVE_QUERY_SONGS = 'RECEIVE_QUERY_SONGS';
export const RECEIVE_QUERY_ALBUMS = 'RECEIVE_QUERY_ALBUMS';
export const RECEIVE_QUERY_ARTISTS = 'RECEIVE_QUERY_ARTISTS';

const receiveQuerySongs = songs => ({
  type: RECEIVE_QUERY_SONGS,
  songs,
});

export const fetchQuerySongs = query => dispatch => (
  SearchBarApiUtil.fetchSongsByQuery(query)
    .then(songs => dispatch(receiveQuerySongs(songs)))
);
