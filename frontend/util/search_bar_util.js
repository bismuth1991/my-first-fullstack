export const fetchSongsByQuery = query => (
  $.ajax({
    method: 'GET',
    url: '/api/songs/search',
    data: query,
  })
);

export const fetchArtistsByQuery = query => (
  $.ajax({
    method: 'GET',
    url: '/api/artists/search',
    data: query,
  })
);

export const fetchAlbumsByQuery = query => (
  $.ajax({
    method: 'GET',
    url: '/api/albums/search',
    data: query,
  })
);
