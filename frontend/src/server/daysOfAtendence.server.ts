import { DaysOfAtendenceInputType } from "../types/DaysOfAtendence.type";
import { request } from "./request.server"

const daysOfAtendenceRouter = '/days-of-atendence';

const getAllDaysOfAtendence = async () => {
  const response = await request({
    method: 'get',
    url: `${daysOfAtendenceRouter}`,
  });

  return response;
}

const createDayOfAtendence = async (data: DaysOfAtendenceInputType) => {
  const response = await request({
    method: 'post',
    url: `${daysOfAtendenceRouter}`,
    data,
  });

  return response;

}

const deleteDayOfAtendence = async (id: string) => {
  const response = await request({
    method: 'delete',
    url: `${daysOfAtendenceRouter}/${id}`
  });

  

  return response;

}

const daysOfAtendenceServer = {
  getAllDaysOfAtendence,
  createDayOfAtendence,
  deleteDayOfAtendence,
}

export default daysOfAtendenceServer;
