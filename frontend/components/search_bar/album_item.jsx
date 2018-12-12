import React from 'react';

const AlbumItem = (props) => {
  const { name } = props;

  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default AlbumItem;
