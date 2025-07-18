import { useParams } from "react-router-dom";
import proyectos from '../../data/proyectos.json';

export const DetailProyect = () => {
  const { id } = useParams();
  const proyecto = proyectos.find(p => p.id.toString() === id);

  if (!proyecto) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-800">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto">
            <img src="/vision.jpg" alt="Proyecto" className="w-full h-94 object-cover mb-6 rounded-md" />
            
            <h1 className="text-4xl font-bold text-amber-400 mb-4">{proyecto.nombre}</h1>
            <p className="text-sm text-gray-600 mb-6">{proyecto.fecha}</p>

            <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
            <p>{proyecto.objetivo}</p>
            <p>{proyecto.objetivo_general}</p>
            <p>{proyecto.detalles}</p>
            <p>{proyecto.antecedentes}</p>
            <p>{proyecto.resumen_tecnico}</p>
            </div>
        </div>
    </div>
  );
};


