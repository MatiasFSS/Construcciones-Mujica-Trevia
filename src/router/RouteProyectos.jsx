import { Navigate, Route, Routes } from "react-router-dom";
import { LandingConstrucciones } from "../pages/LandingConstrucciones";
import { DetailProyect } from "../components/Proyects/DetailProyect";
import { Layout } from "../components/Layout/Layout";

export const RouteProyectos = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingConstrucciones />} />
        <Route path="/proyectos/:id" element={<DetailProyect />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};