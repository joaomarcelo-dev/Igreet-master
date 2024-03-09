import dayjs from 'dayjs';
import { timeExpiredInMinutes } from '../conf';


const generateUnixTimestamp = () => {
  const nowTime = dayjs().unix();
  const timeExpiredUnix = nowTime + (timeExpiredInMinutes * 60);
  const expiredTime = dayjs.unix(timeExpiredUnix);

  console.log('Data de expiração:', expiredTime.format('YYYY-MM-DD HH:mm:ss'));
  return expiredTime;
}

const verifyExpiredTime = (time: string) => {
  const timeIsExpired = dayjs().isAfter(time);
  return timeIsExpired;
}


export const dayjsProvider = {
  generateUnixTimestamp,
  verifyExpiredTime,
};