import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

// TEST
import { login, logout } from './actions/session_actions';

window.configureStore = configureStore;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        id: window.currentUser.id,
        email: window.currentUser.email,
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TEST
  window.store = store;
  window.login = login;
  window.logout = logout;
  window.dispatch = store.dispatch;
  // TEST ENDS

  ReactDOM.render(
    <Root store={store} />,
    root,
  );
});
