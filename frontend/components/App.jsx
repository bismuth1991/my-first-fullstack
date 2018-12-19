import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SearchBarContaier from './search_bar/search_bar_container';
import HeaderLogo from './greeting/header_logo';
import SongIndexContainer from './songs_index/song_index_container';
import ModalContainer from './modal/modal';
import AudioPlayerContainer from './audio_player/audio_player_container';
import SlideShow from './slide_show/slide_show';
import UserPlaylistContainer from './user_playlists/user_playlist_container';

const App = () => (
  <>
    <ModalContainer />

    <header>
      <div className="header container">
        <HeaderLogo />
        <SearchBarContaier />
        <GreetingContainer />
      </div>
    </header>

    <main className="site-content site-content-full">
      <SlideShow />
      <UserPlaylistContainer />
      <SongIndexContainer />
    </main>

    <footer>
      <AudioPlayerContainer />
    </footer>
  </>
);

export default App;
