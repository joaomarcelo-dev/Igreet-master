import { Appointment } from "../../types/Appoinments.type";

export const SET_TOKEN = 'SET_TOKEN';
export const SET_APPOINTMENTS = 'SET_APPOINTMENTS';

const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    payload: token
  }
}

const setAppointments = (appointments: Appointment[]) => {
  return {
    type: SET_APPOINTMENTS,
    payload: appointments
  }
}

const appActions = {
  setToken,
  setAppointments,
}

export default appActions;
