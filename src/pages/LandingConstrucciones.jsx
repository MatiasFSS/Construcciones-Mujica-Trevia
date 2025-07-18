import { useInfo } from "../hooks/useInfo";
import proyectos from '../data/proyectos.json';
import aboutus from '../data/aboutUS.json';
import images from '../data/img.json';
import mision from '../data/mision.json'

import { AboutUs } from "../components/AboutUs/AboutUs";
import { Companies } from "../components/Companies";
import { Mision } from "../components/Mision";
import { Presentation } from "../components/Presentation";
import { Proyects } from "../components/Proyects/Proyects";
import { Loading } from "../components/Loading";

export const LandingConstrucciones = () => {
  const infoProyectos = useInfo(proyectos);
  const infoAboutUs = useInfo(aboutus);
  const infoImages = useInfo(images);
  const infoMision = useInfo(mision);
  
  const isLoading = !infoProyectos || !infoAboutUs || !infoImages || !infoMision;

  if (isLoading) {
    return (
     <Loading/>
    );
  }

  return (
    <>
      <Presentation />
      <AboutUs data={infoAboutUs} />
      <Mision data={infoMision} />
      <Proyects data={infoProyectos} />
      <Companies data={infoImages} />
    </>
  );
};