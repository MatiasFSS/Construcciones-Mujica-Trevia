

export const CardAboutUs = ({infoItem}) => {
  return (
    <div className="h-[300px] sm:h-[350px] w-full bg-gray-800 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-center md:col-span-3 lg:col-span-2 transform transition-transform duration-300 hover:scale-105">
        <p className="text-md md:text-lg font-medium">{infoItem}</p>
    </div>
  )
}


