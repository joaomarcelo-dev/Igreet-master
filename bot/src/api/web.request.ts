import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export const BASE_URL = 'http://192.168.1.227:3333';

type RequestProps = {
  url: '/service' | '/days-of-atendence',
  method: 'get' | 'post' | 'put' | 'delete',
  data?: any
}

const requestServer = async ({method, url, data }: RequestProps) => axios[method](`${BASE_URL}${url}`, {
  ...data,
});

type PostService = {
  imgURL: string
  phone: string
}

export const postService = async ({ imgURL, phone }: PostService) => requestServer({ method: 'post', url: '/service', data: { imgURL, phone } });
export const getAllDaysOfAtendence = async () => requestServer({ method: 'get', url: '/days-of-atendence', });