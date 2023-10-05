import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { PageContextProvider } from './contexts/PageContext';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </React.StrictMode>,
)
