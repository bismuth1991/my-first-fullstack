const fetchAllSongs = (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
  })
);

export default fetchAllSongs;
