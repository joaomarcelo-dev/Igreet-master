import axios from 'axios';

const BASE_URL = 'http://192.168.1.227:3333';

type AxiosRequest = {
  data?: any;
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
}

const requestAxios = async ({ data, url, method }: AxiosRequest) => axios[method](`${BASE_URL}${url}`, data);

export const getServices = async () => {
  const response = await requestAxios({ url: '/services', method: 'get' });
  return response;
}