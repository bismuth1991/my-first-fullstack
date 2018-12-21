import React from 'react';
import SongsContainer from '../songs_container';
import UserPlaylistForm from './user_playlist_form';

class UserPlaylistShow extends React.Component {
  componentDidMount() {
    const { playlistId } = this.props;
    const { fetchUserPlaylist } = this.props;

    fetchUserPlaylist(playlistId);
  }

  render() {
    return (
      <>
        <UserPlaylistForm {...this.props} />
        <SongsContainer {...this.props} />
      </>
    );
  }
}

export default UserPlaylistShow;
