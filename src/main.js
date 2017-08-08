import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import heros from './constants/data';
import App from './components/app'

ReactDOM.render(
  <App heros={heros}/>, document.getElementById('app')
);
