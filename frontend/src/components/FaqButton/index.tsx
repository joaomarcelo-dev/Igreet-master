import { IconType } from 'react-icons';
import './style.scss'
import { useNavigate } from 'react-router-dom';


type ButtonFaq = {
  Icon: IconType
  backgroundButton?: string
  backgroundIcon?: string
  sizeIcon?: number
  router?: string
  onClick?: () => void
}

type FaqButtonProps = {
  buttons: ButtonFaq[]
}

export default function FaqButton({ buttons }: FaqButtonProps) {
  const navigate = useNavigate();

  const navigateTo = (router: string) => {
    navigate(router);
  }

  return (
    <div className="content-faq-button flex_center">

      {
        buttons.map(({ Icon, sizeIcon, onClick, router, backgroundButton, backgroundIcon }, index) => (
          <button
            key={index}
            className='faq-button'
            style={{ backgroundColor: backgroundButton || 'transparent'}}
            onClick={onClick || (() => navigateTo(router || '/'))}
          >
            <Icon
              size={sizeIcon || 25}
              color={backgroundIcon || '#fff'}
            />
          </button>
        ))
      }
    </div>
  );
}