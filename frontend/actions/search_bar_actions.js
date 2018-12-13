import fetchDataByQuery from '../util/search_bar_util';

// export const RECEIVE_QUERY_SONGS = 'RECEIVE_QUERY_SONGS';
// export const RECEIVE_QUERY_ALBUMS = 'RECEIVE_QUERY_ALBUMS';
// export const RECEIVE_QUERY_ARTISTS = 'RECEIVE_QUERY_ARTISTS';
export const RECEIVE_QUERY_DATA = 'RECEIVE_QUERY_DATA';

const receiveQueryData = data => ({
  type: RECEIVE_QUERY_DATA,
  data,
});

export const fetchQueryData = query => dispatch => fetchDataByQuery(query)
  .then(data => dispatch(receiveQueryData(data)));

// const receiveQuerySongs = songs => ({
//   type: RECEIVE_QUERY_SONGS,
//   songs,
// });

// const receiveQueryArtists = artists => ({
//   type: RECEIVE_QUERY_ARTISTS,
//   artists,
// });

// const receiveQueryAlbums = albums => ({
//   type: RECEIVE_QUERY_ALBUMS,
//   albums,
// });

// export const fetchQuerySongs = query => dispatch => (
//   SearchBarApiUtil.fetchSongsByQuery(query)
//     .then(songs => dispatch(receiveQuerySongs(songs)))
// );

// export const fetchQueryArtists = query => dispatch => (
//   SearchBarApiUtil.fetchArtistsByQuery(query)
//     .then(artists => dispatch(receiveQueryArtists(artists)))
// );

// export const fetchQueryAlbums = query => dispatch => (
//   SearchBarApiUtil.fetchAlbumsByQuery(query)
//     .then(albums => dispatch(receiveQueryAlbums(albums)))
// );
