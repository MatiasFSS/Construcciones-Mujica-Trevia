import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const buttonMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white text-gray-800 w-full py-4 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 items-center">
        <div>
          <img src="/Logo.png" alt="logo" className="h-20 w-auto" />
        </div>

        <ul className="hidden md:flex justify-end gap-6 text-nowrap">
          <li className="hover:text-amber-500 transition-colors duration-300 font-bold">
            <a href="#presentation">¿Quiénes somos?</a>
          </li>
          <li className="hover:text-amber-500 transition-colors duration-300 font-bold">
            <a href="#mision">Misión</a>
          </li>
          <li className="hover:text-amber-500 transition-colors duration-300 font-bold">
            <a href="#proyect">Proyectos</a>
          </li>
          <li className="hover:text-amber-500 transition-colors duration-300 font-bold">
            <a href="#companies">Confiaron en nosotros</a>
          </li>
        </ul>


          <div className="flex justify-end md:hidden">
            <button onClick={buttonMenu} className="space-y-1">
              <div className="w-6 h-0.5 bg-gray-800" />
              <div className="w-6 h-0.5 bg-gray-800" />
              <div className="w-6 h-0.5 bg-gray-800" />
            </button>
          </div>

          {isOpen && (
            <ul className="md:hidden flex flex-col items-start text-nowrap font-bold">
              <li className="hover:text-amber-500 transition-colors duration-300">
                <a href="#presentation" onClick={buttonMenu}>¿Quiénes somos?</a>
              </li>
              <li className="hover:text-amber-500 transition-colors duration-300">
                <a href="#mision" onClick={buttonMenu}>Misión</a>
              </li>
              <li className="hover:text-amber-500 transition-colors duration-300">
                <a href="#proyect" onClick={buttonMenu}>Proyectos</a>
              </li>
              <li className="hover:text-amber-500 transition-colors duration-300">
                <a href="#companies" onClick={buttonMenu}>Confiaron en nosotros</a>
              </li>
            </ul>
          )}

      </div>
    </nav>
  );
};
