import dayjs from "dayjs";
import { timeExpiredInMinutes } from "../conf";

const createTimeExpiry = () => {
  return dayjs().add(timeExpiredInMinutes, 'minutes').format();
};

const nowTime = () => dayjs().format();

const dayJsUtils = {
  createTimeExpiry,
  nowTime,
}

export default dayJsUtils;