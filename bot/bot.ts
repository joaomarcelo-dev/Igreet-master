import { create } from 'venom-bot';
import { startVenom } from './src/app';


create({
  session: 'bot-atendente',
}).then((client) =>  startVenom(client));