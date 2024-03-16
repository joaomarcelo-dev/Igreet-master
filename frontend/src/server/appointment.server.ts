import { AppoinmentsCreated, AppointmentDataSubmit, UpdateStatusAppointment } from "../types/Appoinments.type";
import { BASE_URL, request } from "./request.server"

const appointmentRoute = `${BASE_URL}/appointment`

const getAppointmentById = async (id: string) => {
  const response = await request({
    method: 'get',
    url: appointmentRoute,
    data: {
      id,
    }
  });

  return response.data;
}

const createAppointment = async ({ address, birthDate, cpf, date, hour, name, serviceId }: AppointmentDataSubmit): Promise<AppoinmentsCreated> => {
  const response = await request({
    method: 'post',
    url: appointmentRoute,
    data: {
      address,
      birthDate,
      cpf,
      date,
      hour,
      name,
      serviceId,
    }
  });

  return {
    data: response.data,
    status: response.status,
  };
}

const getAllAppointments = async ({ token }: { token: string }) => {
  const response = await request({
    method: 'get',
    url: appointmentRoute,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
}

const updateAppointment = async ({ complet, id }: UpdateStatusAppointment) => {
  const response = await request({
    method: 'put',
    url: appointmentRoute,
    data: {
      complet, id
    },
  });

  return response
}

const appointmentServer = {
  getAppointmentById,
  createAppointment,
  getAllAppointments,
  updateAppointment,
}

export default appointmentServer;
