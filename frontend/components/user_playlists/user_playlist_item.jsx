import React from 'react';
import { Link } from 'react-router-dom';
import { addUserPlaylistToPlayer } from '../../actions/user_playlist_actions';

class UserPlaylistItem extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    return () => {
      const { playlistId, deleteUserPlaylist, fetchUserPlaylist } = this.props;

      switch (type) {
        case 'delete':
          deleteUserPlaylist(playlistId);
          window.location.hash = '/';
          break;
        default:
          fetchUserPlaylist(playlistId);
      }
    };
  }

  render() {
    const { playlistName, playlistId } = this.props;
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

          {/* <i className="far fa-play-circle fade" role="presentation" onClick={this.handleClick('play')} /> */}
          <i className="fas fa-trash-alt" role="presentation" title="delete playlist" onClick={this.handleClick('delete')} />
        </figure>

        <Link
          onClick={this.handleClick('show')}
          to={`/playlists/${playlistId}`}
          style={{ textDecoration: 'underline' }}
        >
          {playlistName}
        </Link>
      </div>
    );
  }
}

export default UserPlaylistItem;
