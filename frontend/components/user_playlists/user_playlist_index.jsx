import React from 'react';
import UserPlaylistItem from './user_playlist_item';

class UserPlaylistIndex extends React.Component {
  componentDidMount() {
    const { fetchUserPlaylists } = this.props;
    fetchUserPlaylists();
  }

  render() {
    const { userPlaylists } = this.props;

    if (userPlaylists.length === 0) return null;

    return (
      <section className="section">
        <div className="container">
          <ul className="grid grid-gutter">
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

export default UserPlaylistIndex;
