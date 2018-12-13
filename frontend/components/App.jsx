import React from 'react';
import AuthRoute from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchBarContaier from './search_bar/search_bar_container';
import HeaderLogo from './greeting/header_logo';
import SongIndexContainer from './songs_index/song_index_container';

const App = () => (
  <>
    <header>
      <HeaderLogo />
      <SearchBarContaier />
      <GreetingContainer />
    </header>

    <section>
      <SongIndexContainer />
    </section>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </>
);

export default App;
