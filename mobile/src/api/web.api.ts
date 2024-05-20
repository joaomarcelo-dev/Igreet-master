import axios from 'axios';
import { UpdateAppointmentProp } from '../Types/Appointment.type';

const BASE_URL = 'http://10.0.98.5:3333';

type AxiosRequest = {
  data?: any;
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
}

const requestAxios = async ({ data, url, method }: AxiosRequest) => axios[method](`${BASE_URL}${url}`, data);

// =========================/ Appointment /================================================================ //
export const getAllAppointments = async () => requestAxios({ url: '/appointment', method: 'get' });
export const updateAppointment = async (data: UpdateAppointmentProp) => requestAxios({ url: '/appointment', method: 'put', data, });

// =========================/ Patients /=================================================================== //
export const getAllPatients = async () => requestAxios({ url: '/patient', method: 'get' });

// =========================/ Days Of Atendence /========================================================== //
export const getAllDaysOfAtendence = async () => requestAxios({ url: '/days-of-atendence', method: 'get' });
