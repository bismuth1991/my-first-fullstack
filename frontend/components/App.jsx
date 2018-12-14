import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SearchBarContaier from './search_bar/search_bar_container';
import HeaderLogo from './greeting/header_logo';
import SongIndexContainer from './songs_index/song_index_container';
import ModalContainer from './modal/modal';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = () => (
  <>
    <ModalContainer />

    <header>
      <HeaderLogo />
      <SearchBarContaier />
      <GreetingContainer />
    </header>

    <section>
      <SongIndexContainer />
    </section>

    <footer>
      <AudioPlayerContainer />
    </footer>
  </>
);

export default App;
