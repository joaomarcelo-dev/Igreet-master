import { IoDocumentTextOutline } from "react-icons/io5";
import { CardsOfPages } from "../types/CardsOfPages.type";
import { CiBoxList } from 'react-icons/ci';
import { FcCalendar } from "react-icons/fc";
import { MdPeopleOutline } from "react-icons/md";

const listOfCardsPages: CardsOfPages = [
  {
    id: 1,
    title: 'Lista de atendimento',
    active: true,
    icon: CiBoxList,
    uri: '/appoinments',
  },

  {
    id: 2,
    title: 'Dias de atendimento',
    active: true,
    icon: FcCalendar,
    uri: '/list-days-of-consult',
  },

  {
    id: 3,
    title: 'Enviar Documento',
    active: false,
    icon: IoDocumentTextOutline,
    uri: '/appoinments',
  },

  {
    id: 4,
    title: 'Lista de clientes',
    active: true,
    icon: MdPeopleOutline,
    uri: '/all-clients',
  }
]

export default listOfCardsPages;