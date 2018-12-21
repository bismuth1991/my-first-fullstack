import React from 'react';
import SlideShow from './slide_show/slide_show';
import SongIndexContainer from './songs_index/song_index_container';
import UserPlaylistContainer from './user_playlists/user_playlist_container';

const HomePage = () => (
  <>
    <SlideShow />
    <UserPlaylistContainer />
    <SongIndexContainer />
  </>
);

export default HomePage;
