import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'; // Ensure this path exists
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure your `index.html` has a div with `id="root"`
);
