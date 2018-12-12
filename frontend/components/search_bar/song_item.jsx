import React from 'react';

const SongItem = (props) => {
  const { title, artist, album } = props;

  return (
    <>
      <div>
        {title}
        {' '}
        {artist}
        {' '}
        {album}
      </div>
    </>
  );
};

export default SongItem;
