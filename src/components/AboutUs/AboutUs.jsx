import { useInfo } from "../../hooks/useInfo"
import aboutus from '../../data/data.json'
import { ImgAboutUs } from "./ImgAboutUs";
import { CardAboutUs } from "./CardAboutUs";

export const AboutUs = () => {

  const {info} = useInfo(aboutus) 

  if (!info) {
    return <div className="container mt-4">No hay datos disponibles</div>;
  }

  const infoItem = Array.isArray(info) ? info[0] : info;

  return (
    <section className="w-full flex items-center justify-center scroll-mt-28" id="presentacion">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 auto-rows-auto gap-10 w-full p-10">
          
          <div className="h-[350px] sm:h-[350px] bg-amber-400 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-center col-span-1 md:col-span-5 lg:col-span-4 transform transition-transform duration-300 hover:scale-105">
            <span className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800">{infoItem.categoria}</span>
            <p className="text-md md:text-lg font-medium">{infoItem.informacion}</p>
          </div>

          <ImgAboutUs src="/vision.jpg" alt="visión"/>
          
          <CardAboutUs infoItem={infoItem.informacion2}/>
          
          <ImgAboutUs src="/vision.jpg" alt="visión"/>

          <CardAboutUs infoItem={infoItem.informacion3}/>

        </div>
    </section>




  )
}


