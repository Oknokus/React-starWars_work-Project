import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './container/app/index';
import ThemeProvider from "./context/ThemeProvider";

import { store } from "./store/store/store";

import styles from './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider>
       <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

