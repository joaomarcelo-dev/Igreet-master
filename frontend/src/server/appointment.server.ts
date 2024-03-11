import { AppoinmentsCreated, AppointmentDataSubmit } from "../types/Appoinments.type";
import { BASE_URL, request } from "./request.server"

const appointmentRoute = `${BASE_URL}/appointment`

const getAppointment = async (id: string) => {
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

const appointmentServer = {
  getAppointment,
  createAppointment,
}

export default appointmentServer;
