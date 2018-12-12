import React from 'react';

const ArtistItem = (props) => {
  const { name } = props;

  return (
    <>
      <div>{name}</div>
    </>
  );
};

export default ArtistItem;
