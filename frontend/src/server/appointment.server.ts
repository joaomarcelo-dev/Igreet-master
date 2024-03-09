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

const appointmentServer = {
  getAppointment,
}

export default appointmentServer;
