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

export const createPlaylist = (name, userId, songIds) => {
  const uniqueSongIds = songIds.filter((id, index, self) => self.indexOf(id) === index);

  return $.ajax({
    method: 'POST',
    url: '/api/playlists/',
    data: {
      playlist: {
        name,
        user_id: userId,
        song_ids: uniqueSongIds,
      },
    },
  });
};

export const deletePlaylist = playlistId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}`,
  })
);
