import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
