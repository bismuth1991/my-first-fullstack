export const fetchUserPlaylists = () => (
  $.ajax({
    method: 'GET',
    url: '/api/playlists',
  })
);

export const fetchUserPlaylist = playlistId => $.ajax({
  method: 'GET',
  url: `/api/playlists/${playlistId}`,
});

export const createPlaylist = (name, userId, songIds) => $.ajax({
  method: 'POST',
  url: '/api/playlists/',
  data: {
    playlist: {
      name,
      user_id: userId,
      song_ids: songIds,
    },
  },
});
