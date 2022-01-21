import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// document.cookie = "SameSite=Lax"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);