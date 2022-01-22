import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

cookies.set('SameSite', 'None');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);