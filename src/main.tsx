// react API
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// components
import App from './routes/App'
import Dev from './temp/Dev'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dev />
    <App />
  </StrictMode>,
)