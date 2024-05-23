import { FaWhatsapp } from "react-icons/fa";
import "./style.scss";

export const WhatsAppButton: React.FC = () => {
  return (
    <button className='whatsApp-button' role='button'>
      <FaWhatsapp size={34}/>
      <h3 className="text-whatsapp">WhatsApp</h3>
    </button>
  );
};