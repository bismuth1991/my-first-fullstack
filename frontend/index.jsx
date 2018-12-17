import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: {
          id: window.currentUser.id,
          email: window.currentUser.email,
        },
      },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(
    <Root store={store} />,
    root,
  );
});
