import { useNavigate } from 'react-router-dom';
import './style.scss';

type HeaderProps = {
  title: string
}

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className='content-header flex_center'>
      <div />
      <h1
        className='title-header'
        onClick={() => navigate('/')}
      >
        { title }
      </h1>
      <div />
    </header>
  )
}