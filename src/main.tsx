import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import './styles.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
