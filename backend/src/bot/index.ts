import { Whatsapp, create } from 'venom-bot';
import serviceService from '../app/services/service.service';
import { ServiceInputType } from '../types/Service.type';

const initVenom = () => create({
  session: 'bot-atendimento',
}).then((client) => start(client));



const start = (client: Whatsapp) => {
  client.onMessage((message) => {
    client.sendText(message.from, 'Olá tudo bem? Deseja argendar um atendimento?');
    client.sendButtons(message.from, 'Escolha uma opção:', 'Sim', { listMessage: 'Escolha uma opção:' });
  });
}

export {
  initVenom
}