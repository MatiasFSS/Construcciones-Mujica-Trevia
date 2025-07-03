

export const Presentation = () => {
  return (
    <section className="relative h-full min-h-[550px] w-full">
        <div className="absolute inset-0 bg-[url('/mision.jpg')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center p-10">
            <span className="text-7xl font-bold p-5 text-amber-400">Tus proyectos al siguiente nivel.</span>
        </div>
        
    </section>
  )
}


