import { Whatsapp, create } from 'venom-bot';
import scheduleJobs from '../schedule';
import messageTemp from '../temp/messageTemp.temp';
import dayJsUtils from '../utils/dayjs.utils';
import serviceModel from '../app/models/services.model';
import { baseUrlServer } from '../conf';

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
        time: dayJsUtils.nowTime(),
      });

      client.sendText(message.from, 'Olá tudo bem? Deseja argendar um atendimento?');
      client.sendButtons(message.from, 'Alguma coisa', 'Não', true);
      client.sendButtons(message.from, 'Alguma coisa', 'Sim', true);

      const includesInService = await serviceModel.getServiceByPhone(message.from);

      if (includesInService && message.body === 'Sim') {
        client.sendText(message.from, `Por favor, preencha seus dados para agendar um atendimento: ${baseUrlServer}/new-appoinment/${includesInService.id}`);
        await serviceModel.deleteServiceByPhone(message.from);
        
      } else if (includesInService && message.body === 'Não') {
        client.sendText(message.from, 'Ok, até a próxima');
        await serviceModel.deleteServiceByPhone(message.from);
      }
  });
}

export {
  initVenom
}