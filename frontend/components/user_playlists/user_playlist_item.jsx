import React from 'react';

class UserPlaylistItem extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    const { playlistId, fetchUserPlaylist, deleteUserPlaylist } = this.props;

    switch (type) {
      case 'delete':
        return () => {
          deleteUserPlaylist(playlistId);
          window.location.hash = '/';
        };
      default:
        return () => {
          fetchUserPlaylist(playlistId);
          window.location.hash = `/playlists/${playlistId}`;
        };
    }
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

          <i className="far fa-play-circle fade" role="presentation" onClick={this.handleClick('show')} />
          <i className="fas fa-times" role="presentation" title="delete playlist" onClick={this.handleClick('delete')} />
          {/* <i className="fas fa-heart" title="Like" /> */}
        </figure>

        <a>{playlistName}</a>
      </div>
    );
  }
}

export default UserPlaylistItem;
