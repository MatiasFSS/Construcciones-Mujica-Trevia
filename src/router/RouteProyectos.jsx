
import { Navigate, Route, Routes } from 'react-router-dom'
import { LandingConstrucciones } from '../pages/LandingConstrucciones'

export const RouteProyectos = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<LandingConstrucciones/>}/>
            <Route path="/proyectos" element={<h1>hola</h1>}/>

            <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes> 
    </>
  )
}

