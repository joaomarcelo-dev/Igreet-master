import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export const BASE_URL = 'http://192.168.1.227:3333';

type RequestProps = {
  url: '/service' | '/days-of-atendence' | 'patient',
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
export const getPatientsByPhoneNumber = async (phoneNumber: string) => requestServer({ method: 'get', url: 'patient', query: `phoneNumber=${phoneNumber}`  })