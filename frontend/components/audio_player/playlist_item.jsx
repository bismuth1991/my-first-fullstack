import React from 'react';

class PlaylistItem extends React.Component {
  constructor() {
    super();

    this.state = {
      currentlyPlayed: 0,
    };
  }

  render() {
    const { songs: { title, artist, albumCover } } = this.props;

    return (
      <div className="song-item-container">
        <figure className="song-img-container">
          <img className="song-img" src={albumCover} alt={title} />

          <i className="far fa-play-circle fade" role="presentation" />
        </figure>

        <a>{title}</a>
        <a>{artist}</a>
      </div>
    );
  }
}

export default PlaylistItem;
