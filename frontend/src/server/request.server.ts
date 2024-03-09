import axios from "axios"

type RequesType = {
  method: 'get' | 'post' | 'delete',
  url: string,
  data?: object
}

export const BASE_URL = 'http://localhost:3333';
export const appointmentURL = 'appointment';

export const request = async ({ method, url, data }: RequesType) => {
  const request = await axios[method](url, data)

  return request
}
