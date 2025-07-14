
export const Mision = ({data}) => {

  const infoItem = Array.isArray(data) ? data[0] : data;

  return (
    <section className="relative h-full min-h-96 w-full scroll-mt-28" id="mision">
        <div className="absolute inset-0 bg-[url('/mision.jpg')] bg-cover bg-center z-0"></div>
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col justify-center items-center p-10">
            <span className="text-5xl font-bold p-5 text-amber-400">{infoItem.title}</span>
            <p className="text-2xl font-light p-5 text-gray-200">{infoItem.informacion}</p>
        </div>
    </section>
  )
}


