import schedule from 'node-schedule';
import { timeScheduleInMinuts } from '../conf';
import { dayjsProvider } from '../providers/dayjs.provider';


schedule.scheduleJob(`*/${timeScheduleInMinuts} * * * *`, async () => {

});
