import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';


export const Companies = ({data}) => {


  return (
      <section className="w-full flex justify-center bg-gray-100 scroll-mt-28 pb-10" id="companies">
        <div className="w-full max-w-7xl px-4">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
              }}
              slidesPerView={3}
              spaceBetween={20}
              breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
              }}
              className="p-6"
            >
            {data.map((img, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <img
                      className="w-full h-full max-h-[240px] max-w-[240px] mx-auto transform transition-transform duration-300 hover:scale-105"
                      src={img.src}
                      alt={img.alt}
                  />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </section>
  );
};