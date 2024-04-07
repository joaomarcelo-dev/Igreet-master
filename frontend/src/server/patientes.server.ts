import { request } from "./request.server"

const patientsRouter = '/patient'

const getAllPatients= async () => {
  const response = await request({
    method: 'get',
    url: `${patientsRouter}`,
  });

  return response;
}

const patientsServer = {
  getAllPatients,
}

export default patientsServer;
