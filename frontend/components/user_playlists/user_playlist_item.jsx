import React from 'react';

const UserPlaylistItem = (props) => {
  const { playlistName } = props;

  return (
    <div className="song-item-container">
      <figure className="song-img-container">
        <img className="song-img" src="https://www.dropbox.com/s/3p3oa0wj6fciljm/1.jpg?dl=1" alt={playlistName} />

        {/* <i className="far fa-play-circle fade" role="presentation" onClick={this.handleClick('play')} />
        <i className="fas fa-plus" role="presentation" title="Add to current Playlist" onClick={this.handleClick('add')} />
        <i className="fas fa-heart" title="Like" /> */}
      </figure>

      <a>{playlistName}</a>
    </div>
  );
};

export default UserPlaylistItem;
