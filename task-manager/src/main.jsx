// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main component

// Render App component into the 'root' div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
