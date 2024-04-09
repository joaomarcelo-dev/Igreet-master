import { PatientInputType } from "../types/Patients.type";
import { request } from "./request.server"

const patientsRouter = '/patient'

const getAllPatients= async () => {
  const response = await request({
    method: 'get',
    url: `${patientsRouter}`,
  });

  return response;
}

const createPatient = async (data: PatientInputType, token: string | null) => {
  const response = await request({
    method: 'post',
    url: `${patientsRouter}`,
    data,
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  });

  return response;

}

const patientsServer = {
  getAllPatients,
  createPatient,
}

export default patientsServer;
