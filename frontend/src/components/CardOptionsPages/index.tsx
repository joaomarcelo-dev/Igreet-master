import { IconType } from 'react-icons';
import './style.scss';
import { useNavigate } from 'react-router-dom';

type CardOptionsPagesProps = {
  title: string;
  uri: string;
  Icon: IconType;
  active: boolean;
  size?: number
}

export default function CardOptionsPages({ title, uri, active, Icon, size = 25 }: CardOptionsPagesProps) {
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
      <div
        className='icon-card-option-page'
      >
        <Icon
          size={ size }
        />
      </div>

      <h4 className='card-options-page-title'>
        { title }
      </h4>

    </div>
  )
}