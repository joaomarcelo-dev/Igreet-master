import { IconType } from 'react-icons';
import './style.scss';
import { useNavigate } from 'react-router-dom';

type CardOptionsPagesProps = {
  title: string;
  uri: string;
  Icon: IconType;
  active: boolean;
}

export default function CardOptionsPages({ title, uri, active, Icon }: CardOptionsPagesProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(uri);
  }

  return (
    <div
      className={`content-card-options-pages flex_center ${active ? 'active' : 'disabled'}`}
      onClick={
        handleClick
      }
    >
      <Icon
        size={30}
      />

      <h4 className='card-options-page-title'>
        { title }
      </h4>

    </div>
  )
}