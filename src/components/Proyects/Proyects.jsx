import { CardProyect } from "./CardProyect";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

export const Proyects = ({ data }) => {
  return (
    <section className="w-full min-h-screen py-10 bg-gray-100 scroll-mt-28" id="proyect">
      <div className="w-full px-4 md:px-10">
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
            768: { slidesPerView: 1 },
            862: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="p-6"
        >
          {data.map((proyecto) => (
            <SwiperSlide key={proyecto.id} className="p-5">
              <CardProyect
                id={proyecto.id}
                title={proyecto.nombre}
                description={proyecto.objetivo}
                fecha={proyecto.fecha}
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