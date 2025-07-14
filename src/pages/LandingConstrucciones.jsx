import { useInfo } from "../hooks/useInfo";
import proyectos from '../data/proyectos.json';
import aboutus from '../data/aboutUS.json';
import images from '../data/img.json';
import mision from '../data/mision.json'

import { AboutUs } from "../components/AboutUs/AboutUs";
import { Companies } from "../components/Companies";
import { Footer } from "../components/Footer/Footer";
import { Mision } from "../components/Mision";
import { Navbar } from "../components/Navbar";
import { Presentation } from "../components/Presentation";
import { Proyects } from "../components/Proyects/Proyects";

export const LandingConstrucciones = () => {
  const infoProyectos = useInfo(proyectos);
  const infoAboutUs = useInfo(aboutus);
  const infoImages = useInfo(images);
  const infoMision = useInfo(mision)
  
  const isLoading = !infoProyectos || !infoAboutUs || !infoImages || !infoMision;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-800 text-lg font-semibold animate-pulse">
            Cargando...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <header className="w-full">
          <Navbar />
        </header>
        <main className="flex-1 pt-20">
          <Presentation />
          <AboutUs data={infoAboutUs} />
          <Mision data={infoMision} />
          <Proyects data={infoProyectos} />
          <Companies data={infoImages} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
