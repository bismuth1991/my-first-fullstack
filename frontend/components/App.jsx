import React from 'react';
// import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchBarContaier from './search_bar/search_bar_container';

const App = () => (
  <>
    <header>
      <h1>ZingLite</h1>
      <GreetingContainer />
    </header>

    <div>
      <SearchBarContaier />
    </div>


    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </>
);

export default App;
