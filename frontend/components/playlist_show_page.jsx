import React from 'react';
import UserPlaylistShowContainer from './user_playlists/user_playlist_show_container';
import UserPlaylistContainer from './user_playlists/user_playlist_container';
import PlaylistIndex from './audio_player/playlist_index';

const PlaylistShowPage = (props) => {
  const { match: { params: { playlistId } } } = props;

  // debugger;
  if (parseInt(playlistId) === 0) {
    return (
      <>
        <UserPlaylistContainer />
        <PlaylistIndex />
      </>
    );
  }
  return (
  <>
    <UserPlaylistContainer />
    <UserPlaylistShowContainer {...props} />
  </>
  );
};

export default PlaylistShowPage;
