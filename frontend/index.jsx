import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TEST
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // ////

  ReactDom.render(
    <h1>Welcome to ZingLite</h1>,
    document.getElementById('root'),
  );
});
