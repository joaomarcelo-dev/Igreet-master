import { useNavigate } from 'react-router-dom';
import './style.scss';
import formatInputUtils from '../../utils/formatInput.utils';

type CardAppointmentProps = {
  name: string;
  phone: string;
  id: string;
  complet: boolean;
  yourTime: boolean;
}

const imgNotFound = 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'

export default function CardAppointment({ name, phone, id, complet, yourTime }: CardAppointmentProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/appoinment/${id}?status=${complet}`);
  }

  return (
    <div
      className={`appointment-card flex_center ${complet ? 'complet' : yourTime ? 'your-time' : ''}`}
      onClick={handleClick}
    >
      <img src={ imgNotFound } alt="" className='img-profile-appointment-card' />
      <div>
        <h3 className='name-appointment-card'>{name}</h3>
        <p>Tel: {
          formatInputUtils.formatNumberPhoneVenom(phone)
        }</p>
      </div>
    </div>
  )
}