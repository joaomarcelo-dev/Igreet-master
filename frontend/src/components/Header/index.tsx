import { useNavigate } from 'react-router-dom';
import './style.scss';

const imgProfileDefault = 'https://www.iconpacks.net/icons/5/free-no-profile-picture-icon-15257-thumb.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className='content-header flex_center'>
      <div />
      <h1
        className='title-header'
        onClick={() => navigate('/')}
      >
        UBS Master
      </h1>
      <nav>
        <img
          className='header-img-profile'
          src={imgProfileDefault}
          alt=""
        />
      </nav>
    </header>
  )
}