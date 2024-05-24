import axios from 'axios';
import dotenv from 'dotenv';
import { AppointmentInputType } from '../types/Appointment.type';

dotenv.config()

export const BASE_URL = process.env.BASE_URL || 'http://192.168.1.227:3333';
export const BASE_URL_FRONT = process.env.BASE_URL_FRONT || 'http://192.168.1.227:5173'

type RequestProps = {
  url: '/service' | '/days-of-atendence' | '/patient' | '/appointment',
  method: 'get' | 'post' | 'put' | 'delete',
  query?: string,
  data?: object
}

const requestServer = async ({method, url, data, query }: RequestProps) => axios[method](`${BASE_URL}${url}?${query}`, {
  ...data,
});

type PostService = {
  imgURL: string
  phone: string
}

export const postService = async ({ imgURL, phone }: PostService) => requestServer({ method: 'post', url: '/service', data: { imgURL, phone } });
export const getAllDaysOfAtendence = async () => requestServer({ method: 'get', url: '/days-of-atendence', });
export const getPatientsByPhoneNumber = async (phoneNumber: string) => requestServer({ method: 'get', url: '/patient', query: `phoneNumber=${phoneNumber}`  })
export const postAppointment = async (data: AppointmentInputType) => requestServer({ method: 'post', url: '/appointment', data, })