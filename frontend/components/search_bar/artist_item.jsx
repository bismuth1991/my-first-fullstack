import React from 'react';

const ArtistItem = (props) => {
  const { name } = props;

  return (
    <>
      <div className="artist list-item">{name}</div>
    </>
  );
};

export default ArtistItem;
