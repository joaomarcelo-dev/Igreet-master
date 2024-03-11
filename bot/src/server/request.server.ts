import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

type RequestServer = {
  url: '/service' | '/patient';
  method: 'get' | 'post' | 'put' | 'delete';
  data?: any;
  headers?: any;
};


const BASE_URL = process.env.BASE_URL || 'http://localhost:3333';


export const requestServer = async ({ method, url, data }: RequestServer) => {
  const request = await axios[method](`${BASE_URL}${url}`, data);
  return request;
}
