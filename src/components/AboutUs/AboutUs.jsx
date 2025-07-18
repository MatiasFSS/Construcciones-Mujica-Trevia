import { ImgAboutUs } from "./ImgAboutUs";
import { CardAboutUs } from "./CardAboutUs";
import { FcIdea } from "react-icons/fc";

export const AboutUs = ({ data }) => {
  const infoItem = Array.isArray(data) ? data[0] : data;

  return (
    <section className="w-full flex items-center justify-center scroll-mt-28" id="presentación">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 auto-rows-auto gap-10 w-full p-10">
        
        <div className="h-[350px] sm:h-[350px] bg-amber-400 rounded-3xl shadow-2xl p-6 text-white flex flex-col justify-center col-span-1 md:col-span-5 lg:col-span-4 transform transition-transform duration-300 hover:scale-105">
          <div className="flex items-center gap-3">
            <FcIdea className="w-10 h-10" />
            <span className="text-2xl sm:text-4xl font-bold mb-4 text-gray-800">
              {infoItem.title}
            </span>
          </div>
          <p className="text-base font-normal sm:text-lg text-md md:text-lg">
            {infoItem.informacion}
          </p>
        </div>

        <ImgAboutUs src="/vision.jpg" alt="visión" />
        <CardAboutUs infoItem={infoItem.informacion2} />
        <ImgAboutUs src="/vision.jpg" alt="visión" />
        <CardAboutUs infoItem={infoItem.informacion3} />

      </div>
    </section>
  );
};