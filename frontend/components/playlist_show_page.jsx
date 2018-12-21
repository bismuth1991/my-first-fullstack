import React from 'react';
import UserPlaylistShowContainer from './user_playlists/user_playlist_show_container';
import UserPlaylistContainer from './user_playlists/user_playlist_container';

const PlaylistShowPage = props => (
  <>
    <UserPlaylistContainer />
    <UserPlaylistShowContainer {...props} />
  </>
);

export default PlaylistShowPage;
