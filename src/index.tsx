import React from 'react';
import ReactDOM from 'react-dom';

import './styles/base/fonts.scss';
import './styles/base/base.scss';

import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
