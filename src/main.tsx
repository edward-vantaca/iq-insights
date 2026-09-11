import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AccessGate from './components/AccessGate'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccessGate>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AccessGate>
  </React.StrictMode>,
)
