import { FcCalendar, FcClock } from 'react-icons/fc';
import './style.scss';

type CardDaysOfAtendenceProps = {
  date: string;
  hourStart: string;
  hourEnd: string;
  title: string;
}

export default function CardDaysOfAtendence({ date, hourEnd, hourStart, title }: CardDaysOfAtendenceProps) {
  return (
    <div className='content-card-days-of-atendence flex_center'>
      <h4>{ title }</h4>

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