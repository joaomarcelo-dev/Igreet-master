import axios from 'axios';
import { AppointmentInputType, UpdateAppointmentProp } from '../Types/Appointment.type';
import { DaysOfAtendenceInputType } from '../Types/DaysOfAtendence.type';

const BASE_URL = 'http://192.168.1.227:3333';

type AxiosRequest = {
  data?: any;
  url: '/appointment' | '/patient' | '/days-of-atendence';
  method: 'get' | 'post' | 'put' | 'delete';
}

const requestAxios = async ({ data, url, method }: AxiosRequest) => axios[method](`${BASE_URL}${url}`, {
  ...data
});

// =========================/ Appointment /================================================================ //
export const getAllAppointments = async () => requestAxios({ url: '/appointment', method: 'get' });
export const updateAppointment = async (data: UpdateAppointmentProp) => requestAxios({ url: '/appointment', method: 'put', data, });
export const createAppointment = async ({ dayOfAtencenceId, imgURL, patientId }: AppointmentInputType) => requestAxios({ method: 'post', url: '/appointment', data: { dayOfAtencenceId, imgURL, patientId } })

// =========================/ Patients /=================================================================== //
export const getAllPatients = async () => requestAxios({ url: '/patient', method: 'get' });

// =========================/ Days Of Atendence /========================================================== //
export const getAllDaysOfAtendence = async () => requestAxios({ url: '/days-of-atendence', method: 'get' });
export const createDaysOfAtendence = async ({ date, hourEnd, hourStart, title, notification }: DaysOfAtendenceInputType) => requestAxios({ url: '/days-of-atendence', method: 'post', data: { date, hourStart, hourEnd, title, notification } });
export const deleteDaysOfAtendence = async (id: string) => requestAxios({ method: 'put', url: '/days-of-atendence', data: { id }})
