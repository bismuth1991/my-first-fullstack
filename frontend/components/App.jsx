import React from 'react';
import Switch from 'react-router-dom/Switch';
import { Route } from 'react-router-dom';
import SongIndexContainer from './songs_index/song_index_container';
import ModalContainer from './modal/modal';
import AudioPlayerContainer from './audio_player/audio_player_container';
import SlideShow from './slide_show/slide_show';
import UserPlaylistContainer from './user_playlists/user_playlist_container';
import Header from './header/header';
import UserPlaylistShow from './user_playlists/user_playlist_show';

const App = () => (
  <>
    <ModalContainer />

    <header>
      <Header />
    </header>

    <main className="site-content site-content-full">
      <Switch>
        <Route path="/playlists/:playlistId" component={UserPlaylistShow} />
        {/* <Route path="/" component={SlideShow} /> */}
        <Route path="/" component={UserPlaylistContainer} />
        {/* <Route path="/" component={SongIndexContainer} /> */}
      </Switch>
    </main>

    <footer>
      <AudioPlayerContainer />
    </footer>
  </>
);

export default App;
