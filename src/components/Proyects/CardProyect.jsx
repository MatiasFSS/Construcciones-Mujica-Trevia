
export const CardProyect = ({title, description, src, alt}) => {
  return (
    <>
      <div className="h-full min-h-[560px] sm:min-h-[580px] lg: flex flex-col bg-gray-800 rounded-2xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105">
            <a href="#">
                <img className="rounded-t-lg" src={src} alt={alt} />
            </a>
            <div className="flex flex-1 flex-col justify-start p-5">
                <a href="#" className="hover:text-blue-800 dark:hover:text-blue-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

                   
            </div>
            <a href="/proyectos" className="px-3 pb-5 text-sm font-medium text-center text-white hover:text-amber-400">
                    Ver mas    
            </a>
        </div>
    </>
  ) 
}


