import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { ItemsFooter } from "./ItemsFooter";

export const Footer = () => {

  const contactoData = [
    { icon: FaInstagram, text: '@construccionesmujicaytrevia' },
    { icon: IoCallOutline, text: '+56 9420 76 202' },
    { icon: IoCallOutline, text: '+56 9613 09 712' },
    { icon: MdOutlineEmail, text: 'construccionesmujica@gmail.com' },
  ];

 

  return (
    <div className="bg-gray-800 text-white w-full py-8 shadow-md">
      <div className="flex flex-col items-center gap-y-6 xl:flex-row xl:justify-around xl:items-center">

        <h1 className="text-4xl text-amber-400 font-bold text-center">
          Contáctanos
        </h1>

        {contactoData.map((item, index) => (
          <ItemsFooter key={index} icon={item.icon} text={item.text} />
        ))}

      </div>
    </div>

  )
}


