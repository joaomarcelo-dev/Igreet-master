import axios from "axios"
import { baseUrlServer } from "../conf";

type RequesType = {
  method: 'get' | 'post' | 'delete' | 'put',
  url: string,
  data?: object,
  headers?: object
}

export const appointmentURL = 'appointment';

export const request = async ({ method, url, data, headers }: RequesType) => {
  const request = await axios[method](`${baseUrlServer}${url}`, data, { headers })

  return request
}
