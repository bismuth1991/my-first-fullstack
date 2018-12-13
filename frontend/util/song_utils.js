export const fetchSomeSongs = (offSet = 0) => (
  $.ajax({
    method: 'GET',
    url: '/api/songs',
    data: { offSet },
  })
);
