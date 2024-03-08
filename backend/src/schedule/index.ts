import schedule from 'node-schedule';
import { timeScheduleInMinuts } from '../conf';
import { verificationExpirationServiceTime } from '../utils/verificationService.utils';
import { Whatsapp } from 'venom-bot';

const scheduleJobs = async (client: Whatsapp) => {
  schedule.scheduleJob(`*/${timeScheduleInMinuts} * * * *`, function() {
    verificationExpirationServiceTime(client);
  });
}

export default scheduleJobs;