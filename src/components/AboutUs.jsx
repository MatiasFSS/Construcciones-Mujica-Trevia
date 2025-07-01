import { useInfo } from "../hooks/useInfo"
import aboutus from '../data/data.json'

export const AboutUs = () => {

  const {info} = useInfo(aboutus) 

  if (!info) {
    return <div className="container mt-4">No hay datos disponibles</div>;
  }

  const infoItem = Array.isArray(info) ? info[0] : info;

  return (
    <section className=" h-full w-full flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 auto-rows-auto gap-6 max-w-7xl w-full p-4 items-center">
        
        {/* Card */}
        <div className="bg-amber-400 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-center h-full col-span-1 md:col-span-3 lg:col-span-4">
          <span className="text-5xl font-bold mb-4 text-gray-800">
            {infoItem.categoria}
          </span>
          <p className="text-lg md:text-md font-medium">
            {infoItem.informacion}
          </p>
        </div>

        {/* Imagen */}
        <div className="w-full h-full col-span-1 md:col-span-2 lg:col-span-3 hover:scale-105 hover:transition-all">
          <img
            src="/vision.jpg"
            alt="visión"
            className="rounded-2xl w-full h-full object-cover shadow-xl"
          />
        </div>

       <div className="bg-gray-800 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-center h-full md:col-span-5 lg:col-span-2">
          <p className="text-lg md:text-md font-medium">
            {infoItem.informacion2}
          </p>
        </div>

        <div className="w-full h-full md:col-span-3 lg:col-span-3 hover:scale-105 hover:transition-all">
          <img
            src="/vision.jpg"
            alt="visión"
            className="rounded-2xl w-full h-full  object-cover shadow-xl"
          />
        </div>

        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-center h-full md:col-span-2 lg:col-span-2">
          <p className="text-lg md:text-md font-medium">
            {infoItem.informacion3}
          </p>
        </div>
        

      </div>
    </section>


  )
}


