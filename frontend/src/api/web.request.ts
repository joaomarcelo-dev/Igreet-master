import axios from 'axios';
import { BASE_URL_SERVER } from '../conf';

type RequestProps = {
  url: '/service' | '/days-of-atendence' | '/patient' | '/appointment';
  parms?: string;
  method: 'get' | 'post' | 'put' | 'delete'
  data?: object;
}
export const requestServer = ({ data, method, url, parms }: RequestProps) => axios[method](`${BASE_URL_SERVER}${url}?${parms}`, {
  data,
})
  

export const getService = async (code: string) => requestServer({ method: 'get', url: '/service', parms: `code=${code}` });
export const getAllDaysOfAtendence = async () => requestServer({ method: 'get', url: '/days-of-atendence' });
export const getPatientByPhoneNumber = async (phoneNumber: string) => requestServer({ method: 'get', url: '/patient', parms: `phoneNumber=${phoneNumber}` });
export const postAppointmentById = async (ids: string[]) => requestServer({ method: 'post', url: '/appointment', data: { ids } });