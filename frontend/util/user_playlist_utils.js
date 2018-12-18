export const fetchUserPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists',
  })
);

export const random = () => (
  1 + 1
);
