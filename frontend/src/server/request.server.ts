import axios from "axios"

type RequesType = {
  method: 'get' | 'post' | 'delete',
  url: string,
  data?: object,
  headers?: object
}

export const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3333';
export const appointmentURL = 'appointment';

export const request = async ({ method, url, data, headers }: RequesType) => {
  const request = await axios[method](url, data, { headers })

  return request
}
