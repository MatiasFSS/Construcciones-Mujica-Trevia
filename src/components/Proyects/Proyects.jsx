import { useInfo } from "../../hooks/useInfo";
import proyectos from '../../data/proyectos.json';
import { CardProyect } from "./CardProyect";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export const Proyects = () => {
  const {info} = useInfo(proyectos) 

  if (!info) {
    return <div className="container mt-4">No hay datos disponibles</div>;
  }

  return (
    <section className="h-full w-full min-w-screen flex items-center justify-center overflow-hidden py-10 bg-gray-100 scroll-mt-28" id="proyect">
      
      <div className=" h-full w-full p-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={3} 
          spaceBetween={24} 
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1},
            862: { slidesPerView: 2 },
            1280: { slidesPerView: 3},
          }}
          className="p-6"
        >
          {info.map((proyecto, index) => (
            <SwiperSlide key={index} className="p-5">
              
                <CardProyect
                  title={proyecto.nombre}
                  description={proyecto.objetivo}
                  src="/vision.jpg"
                  alt="Proyecto"
                />
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};