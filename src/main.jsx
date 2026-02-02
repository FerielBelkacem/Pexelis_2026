import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import "./Style/variables.css"
import '../src/assets/Fonts/WEB/css/clash-display.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
