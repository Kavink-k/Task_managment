import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import store from './redux/store.js';
import "@mantine/core/styles.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <HashRouter>
          <App />
        </HashRouter>
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
