import React from 'react';
import ReactDOM from 'react-dom/client';
import { Menu } from './components/menu/Menu';
import './index.css';
import AppRouter from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Menu />
    <AppRouter/>
  </React.StrictMode>
);
