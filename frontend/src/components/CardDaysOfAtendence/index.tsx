import { FcCalendar, FcClock } from 'react-icons/fc';
import './style.scss';
import { BsTrash } from 'react-icons/bs';
import daysOfAtendenceServer from '../../server/daysOfAtendence.server';
import SweetAlert from '../SweetAlert/SweetAlert';

type CardDaysOfAtendenceProps = {
  date: string;
  hourStart: string;
  hourEnd: string;
  title: string;
  id: string;
}

export default function CardDaysOfAtendence({ date, hourEnd, hourStart, title, id }: CardDaysOfAtendenceProps) {
  const deleteAtendence = async () => {
    const response = confirm('Deseja realmente excluir?');

    if (response) {
      await daysOfAtendenceServer.deleteDayOfAtendence(id)
      .then(() => {
        SweetAlert().success('Sucesso', 'Excluído com sucesso');

        setTimeout(() => window.location.reload(), 2000)
        
      }).catch(() => {
        SweetAlert().error('Falha', 'Erro ao excluir');
      });
    }
  }
  return (
    <div
      className='content-card-days-of-atendence flex_center'
    >
      
      <button
        className='button-delete-card-days-of-atendence'
        onClick={deleteAtendence}
      >
        <BsTrash size={15} />
      </button>

      <h4
        className='title-card-days-of-atendence'
      >
        { title }
      </h4>

      <div>
        <h5 className='text-date-of-atendence'>
          <FcCalendar size={20} />
          <span className='date'>: { date }</span>
        </h5>

        <h5 className='text-date-of-atendence'>
          <FcClock size={20} />
          <span className='hour'>: { hourStart } - { hourEnd }</span>
        </h5>
      </div>
      
    </div>
  )
}