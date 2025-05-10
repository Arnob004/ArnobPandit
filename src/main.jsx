import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BtnProvider } from './Context/BtnContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BtnProvider>
      <App />
    </BtnProvider>
  </StrictMode>,
)
