import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { LandingConstrucciones } from './pages/LandingConstrucciones'
import { BrowserRouter } from 'react-router-dom'
import { RouteProyectos } from './router/RouteProyectos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RouteProyectos/>
    </BrowserRouter>
  </StrictMode>
)
