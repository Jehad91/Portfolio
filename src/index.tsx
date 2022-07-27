import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'system-ui',
      size: '20px',
    },
  },
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
  <Grommet theme={theme}>
    <App/>
  </Grommet>
);
serviceWorker.unregister();