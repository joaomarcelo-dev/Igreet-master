import axios from 'axios';
import { AppointmentInputType, UpdateAppointmentProp } from '../Types/Appointment.type';
import { DaysOfAtendenceInputType } from '../Types/DaysOfAtendence.type';
import store from '../redux/store';
import appActions from '../redux/actions/app.actions';
import { PatientInputType } from '../Types/Patient.type';

const { EXPO_PUBLIC_API_URL } = process.env

const BASE_URL = EXPO_PUBLIC_API_URL || 'http://10.0.98.2:3333';

type AxiosRequest = {
  data?: any;
  url: '/appointment' | '/patient' | '/days-of-atendence' | '/login';
  method: 'get' | 'post' | 'put' | 'delete';
  query?: string
}

const requestAxios = async ({ data, url, method, query }: AxiosRequest) => {
  store.dispatch(appActions.setLoading(true));

  const response = await axios[method](`${BASE_URL}${url}?${query}`, {
    ...data,
    headers: {
      'Authorization': `Bearer ${store.getState().user.token}`,
    }
  }).then((response) => {
    store.dispatch(appActions.setRequestStatus({ success: true, visible: true }));
    return response;
  }).catch((e) => {
    // store.dispatch(appActions.setRequestStatus({ success: false, visible: true }));
    return e
  }).finally(() => {
    store.dispatch(appActions.setLoading(false));
  });

  return response;
}

// =========================/ Appointment /================================================================ //
export const getAllAppointments = async () => requestAxios({ url: '/appointment', method: 'get' });
export const updateAppointment = async (data: UpdateAppointmentProp) => requestAxios({ url: '/appointment', method: 'put', data, });
export const createAppointment = async (data: AppointmentInputType & PatientInputType & { appId: string }) => requestAxios({ method: 'post', url: '/appointment', data, });
export const deleteAppointment = async (id: string) => requestAxios({ method: 'delete', url: '/appointment', query: `id=${id}` });

// =========================/ Patients /=================================================================== //
export const getAllPatients = async () => requestAxios({ url: '/patient', method: 'get' });
export const deletePatient = async (id: string) => requestAxios({ method: 'delete', url: '/patient', query: `id=${id}` })

// =========================/ Days Of Atendence /========================================================== //
export const getAllDaysOfAtendence = async () => requestAxios({ url: '/days-of-atendence', method: 'get' });
export const createDaysOfAtendence = async ({ date, hourEnd, hourStart, title, notification }: DaysOfAtendenceInputType) => requestAxios({ url: '/days-of-atendence', method: 'post', data: { date, hourStart, hourEnd, title, notification } });
export const deleteDaysOfAtendence = async (id: string) => requestAxios({ method: 'put', url: '/days-of-atendence', data: { id }})

// =========================/ Login  /========================================================== //
export const loginUser = async (data: {email: string, password: string }) => requestAxios({ method: 'post', url: '/login', data, });
