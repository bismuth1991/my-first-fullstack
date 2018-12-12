export const fetchAllSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
  })
);

export const fetchSongsByQuery = query => (
  $.ajax({
    method: 'GET',
    url: '/api/songs/search',
    data: query,
  })
);
