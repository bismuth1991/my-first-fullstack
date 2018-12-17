const rearrangedPlayer = [
  {
    className: 'top',
    style: { marginBottom: '0.6rem', marginTop: '0.5rem', paddingLeft: '0.7rem' },
    innerComponents: [
      {
        type: 'name',
        style: { width: '75%', fontWeight: 'bold' },
      },
      {
        type: 'time',
        style: { justifyContent: 'flex-end' },
      },
    ],
  },
  {
    className: 'bottom',
    innerComponents: [
      {
        type: 'rewind',
        style: { width: '17%', justifyContent: 'flex-end' },
      },
      {
        type: 'play',
        style: { width: '17%', justifyContent: 'flex-end' },
      },
      {
        type: 'forward',
        style: { width: '17%' },
      },
      {
        type: 'loop',
        style: { width: '17%' },
      },
      {
        type: 'volume',
        style: { width: '30%' },
      },
    ],
  },
];

export default rearrangedPlayer;
