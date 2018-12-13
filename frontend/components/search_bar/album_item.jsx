import React from 'react';

const AlbumItem = (props) => {
  const { name } = props;

  return (
    <>
      <div className="album list-item">{name}</div>
    </>
  );
};

export default AlbumItem;
