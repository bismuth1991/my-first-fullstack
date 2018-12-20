const uniqueSongIds = songIds => songIds.filter((id, index, self) => self.indexOf(id) === index);

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
      song_ids: uniqueSongIds(songIds),
    },
  },
});

export const editPlaylist = (playlistId, name, userId, songIds) => $.ajax({
  method: 'PATCH',
  url: `/api/playlists/${playlistId}`,
  data: {
    playlist: {
      name,
      user_id: userId,
      song_ids: uniqueSongIds(songIds),
    },
  },
});

export const deletePlaylist = playlistId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/playlists/${playlistId}`,
  })
);
