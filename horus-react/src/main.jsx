import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/home.css'
import './styles/loader.css'
import './styles/policies.css'
import './styles/quienes-somos.css'
import './styles/cableado.css'
import './styles/camaras.css'
import './styles/soporte.css'
import './styles/educacion.css'
import './styles/galeria.css'
import './styles/contactos.css'
import './styles/libro-reclamaciones.css'
import './styles/market.css'
import './styles/responsive-fixes.css'
import './styles/visual-upgrades.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
