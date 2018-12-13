export const fetchSomeSongs = () => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
  })
);
