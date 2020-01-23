import React from 'react';
import ReactDOM from 'react-dom';
//import {BrowserRouter} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <HashRouter basename="/">
    <ScrollToTop />
    <App />
  </HashRouter>,
  document.getElementById('root')
);
serviceWorker.register();
