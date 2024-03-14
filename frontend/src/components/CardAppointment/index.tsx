import { useNavigate } from 'react-router-dom';
import './style.scss';

type CardAppointmentProps = {
  name: string;
  phone: string;
  id: string;
}

const imgNotFound = 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'

export default function CardAppointment({ name, phone, id }: CardAppointmentProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/appoinment/${id}`);
  }

  return (
    <div
      className="appointment-card flex_center"
      onClick={handleClick}
    >
      <img src={ imgNotFound } alt="" className='img-profile-appointment-card' />
      <div>
        <h3 className='name-appointment-card'>{name}</h3>
        <p>Tel: {phone}</p>
      </div>
    </div>
  )
}