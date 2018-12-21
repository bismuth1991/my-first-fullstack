import React from 'react';
import Switch from 'react-router-dom/Switch';
import { Route } from 'react-router-dom';
import ModalContainer from './modal/modal';
import AudioPlayerContainer from './audio_player/audio_player_container';
import Header from './header/header';
import HomePage from './home_page';
import PlaylistShowPage from './playlist_show_page';
import SearchPage from './search_page';
import RootPage from './root_page';

const App = () => (
  <>
    <ModalContainer />

    <header>
      <Header />
    </header>

    <main className="site-content site-content-full">
      <Route path="/home" component={HomePage} />
      <Route path="/playlists/:playlistId" component={PlaylistShowPage} />
      <Route path="/search-results" component={SearchPage} />
      <Route path="/" component={RootPage} />
    </main>

    <footer>
      <Route path="/" component={AudioPlayerContainer} />
    </footer>
  </>
);

export default App;
