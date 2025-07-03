
export const ImgAboutUs = ({src, alt}) => {
  return (
    <div className="h-[300px] sm:h-[350px] w-full shadow-2xl col-span-1 md:col-span-2 lg:col-span-3 transform transition-transform duration-300 hover:scale-105">
        <img
            src={src}
            alt={alt}
            className="h-full w-full rounded-2xl object-cover shadow-xl"
        />
    </div>
  )
}


