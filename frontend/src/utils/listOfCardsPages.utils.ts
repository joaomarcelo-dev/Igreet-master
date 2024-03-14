import { IoDocumentTextOutline } from "react-icons/io5";
import { CardsOfPages } from "../types/CardsOfPages.type";
import { CiBoxList } from 'react-icons/ci';

const listOfCardsPages: CardsOfPages = [
  {
    id: 1,
    title: 'Lista de atendimento',
    active: true,
    icon: CiBoxList,
    uri: '/appoinments',
  },
  // {
  //   id: 2,
  //   title: 'Lista de atendidos',
  //   active: false,
  //   icon: CiBoxList,
  //   uri: '/appoinments',
  // },
  {
    id: 3,
    title: 'Enviar Documento',
    active: false,
    icon: IoDocumentTextOutline,
    uri: '/appoinments',
  }
]

export default listOfCardsPages;