import schedule from 'node-schedule';
import { timeScheduleInMinuts } from '../conf';
import serviceModel from '../app/models/services.model';
import { dayjsProvider } from '../providers/dayjs.provider';


schedule.scheduleJob(`*/${timeScheduleInMinuts} * * * *`, async () => {
  console.log('Executando a função a cada', timeScheduleInMinuts, 'minutos.');
  const allService = await serviceModel.getAllServices();

  allService.forEach(async (service) => {
    const timeIsExpired = dayjsProvider.verifyExpiredTime(service.expirationTime);

    if (timeIsExpired) {
      await serviceModel.deleteService(service.id);
      console.log('Mensagem expirada:', service.id);
    }
  });
});
