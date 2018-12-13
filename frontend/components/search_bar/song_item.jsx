import React from 'react';

const SongItem = (props) => {
  const { title, artist } = props;

  return (
    <>
      <div className="song list-item">
        <a href="#/" className="title">{title}</a>
        <br />
        <a href="#/" className="artist">{artist}</a>
      </div>
    </>
  );
};

export default SongItem;
