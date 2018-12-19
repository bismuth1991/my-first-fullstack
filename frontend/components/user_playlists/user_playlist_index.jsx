import React from 'react';
import UserPlaylistItem from './user_playlist_item';

class UserPlaylistIndex extends React.Component {
  componentDidMount() {
    const { fetchUserPlaylists } = this.props;
    fetchUserPlaylists();
  }

  render() {
    const { userPlaylists, currentUser } = this.props;

    if (currentUser.id === null) return null;
    if (userPlaylists.length === 0) return null;

    if (currentUser.id !== null) {
      return (
        <section className="section">
          <div className="container">
            <h2>Personal Playlists</h2>
            <ul className="grid grid-gutter padding-left" id="playlist-index">
              {userPlaylists.map(playlist => (
                <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={playlist.id}>
                  <UserPlaylistItem playlistName={playlist.name} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default UserPlaylistIndex;
