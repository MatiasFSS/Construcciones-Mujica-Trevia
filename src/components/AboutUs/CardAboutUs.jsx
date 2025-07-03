

export const CardAboutUs = ({infoItem}) => {
  return (
    <div className="h-[300px] sm:h-[350px] w-full bg-gray-800 rounded-2xl shadow-2xl p-6 text-white flex flex-col justify-center md:col-span-3 lg:col-span-2 transform transition-transform duration-300 hover:scale-105">
        <p className="text-base font-normal sm:text-lg text-md md:text-lg ">{infoItem}</p>
    </div>
  )
}


