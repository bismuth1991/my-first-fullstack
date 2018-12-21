import React from 'react';
import UserPlaylistShow from './user_playlists/user_playlist_show';
import UserPlaylistContainer from './user_playlists/user_playlist_container';

const PlaylistShowPage = props => (
  <>
    <UserPlaylistContainer />
    <UserPlaylistShow {...props} />
  </>
);

export default PlaylistShowPage;
