import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PageContextProvider } from './contexts/PageContext';
import { AuthContextProvider } from './contexts/AuthContext.tsx';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </PageContextProvider>
  </React.StrictMode>,
)
