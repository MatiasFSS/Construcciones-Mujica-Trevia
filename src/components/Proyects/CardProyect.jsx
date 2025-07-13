
export const CardProyect = ({title, description, src, alt, id}) => {
  return (
    <>
      <div className="h-full min-h-[580px] sm:min-h-[680px] lg: flex flex-col bg-gray-800 rounded-2xl overflow-hidden shadow-sm transform transition-transform duration-300 hover:scale-105">
            <a href="#">
                <img className="rounded-t-lg" src={src} alt={alt} />
            </a>
            <div className="flex flex-1 flex-col justify-start p-5">
                <a href="#" className="hover:text-blue-800 dark:hover:text-blue-700 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-amber-400">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">{description}</p>

                   
            </div>
            <a href={`/proyectos/${id}`}className="px-3 pb-5 text-xl font-medium text-center text-white hover:text-amber-400">
                    Ver mas    
            </a>
        </div>
    </>
  ) 
}


