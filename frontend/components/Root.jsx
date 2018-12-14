import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';

const Root = ({ store }) => (

  <Provider store={store}>
    <HashRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </HashRouter>
  </Provider>
);

export default Root;
