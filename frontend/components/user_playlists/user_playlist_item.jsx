import React from 'react';

class UserPlaylistItem extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { playlistId, fetchUserPlaylist, history } = this.props;

    fetchUserPlaylist(playlistId);
    window.location.hash = `/playlists/${playlistId}`;
  }

  render() {
    const { playlistName } = this.props;
    const randomNum = (min, max) => {
      const random = Math.random() * (max - min) + min;
      return Math.floor(random);
    };
    return (
      <div className="song-item-container">
        <figure className="song-img-container" style={{ border: '1px solid grey' }}>
          <img
            className="song-img"
            src={window.playlistImages[randomNum(0, 12)]}
            alt={playlistName}
          />

          <i className="far fa-play-circle fade" role="presentation" onClick={this.handleClick} />
          {/* <i className="fas fa-plus" role="presentation" title="Add to current Playlist" onClick={this.handleClick('add')} /> */}
          {/* <i className="fas fa-heart" title="Like" /> */}
        </figure>

        <a>{playlistName}</a>
      </div>
    );
  }
}

export default UserPlaylistItem;
