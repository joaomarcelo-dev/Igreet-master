import { Whatsapp, create } from 'venom-bot';
import scheduleJobs from '../schedule';
import messageTemp from '../temp/messageTemp.temp';
import dayJsUtils from '../utils/dayjs.utils';
import serviceModel from '../app/models/services.model';

const initVenom = () => create({
  session: 'bot-atendimento',
}).then((client) => {
  start(client)
  scheduleJobs(client);
});



const start = async (client: Whatsapp) => {
  client.onMessage( async (message) => {
      await serviceModel.createService({
        expirationTime: dayJsUtils.createTimeExpiry(),
        phone: message.from,
        time: dayJsUtils.nowTime()
      });

      client.sendText(message.from, 'Olá tudo bem? Deseja argendar um atendimento?');
      client.sendButtons(message.from, '', 'Não', true);
      client.sendButtons(message.from, '', 'Sim', true);

      if (await serviceModel.getServiceByPhone(message.from) && message.body === 'Sim') {
        client.sendText(message.from, 'Por favor, preencha seus dados para agendar um atendimento: http://10.0.0.227:5173');
        
      } else if (message.body === 'Não') {
        client.sendText(message.from, 'Ok, até a próxima');
      }
  });
}

export {
  initVenom
}