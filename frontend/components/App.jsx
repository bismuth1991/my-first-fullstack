import React from 'react';
import SongIndexContainer from './songs_index/song_index_container';
import ModalContainer from './modal/modal';
import AudioPlayerContainer from './audio_player/audio_player_container';
import SlideShow from './slide_show/slide_show';
import UserPlaylistContainer from './user_playlists/user_playlist_container';
import Header from './header/header';

const App = () => (
  <>
    <ModalContainer />

    <header>
      <Header />
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
