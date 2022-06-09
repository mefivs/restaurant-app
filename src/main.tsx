import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes'
import './main.scss';
import { AuthProvider } from './providers/AuthContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
)
