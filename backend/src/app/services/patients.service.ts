import { ReturnServiceType } from "../../types/ReturnService.type";
import patientsModel from "../models/patients.model";

const getAllPatients = async (): Promise<ReturnServiceType> => {
  const allPatients = await patientsModel.getAllPatients();

  return {
    data: allPatients,
    status: 200,
  }
}

const getAllPatientByPhoneNumber = async (phone: string): Promise<ReturnServiceType> => {
  const allPatientsByPhoneNumber = await patientsModel.getAllPatientByPhoneNumber(phone);

  return {
    data: allPatientsByPhoneNumber,
    status: 200,
  }
}

const deletePatient = async (id: string): Promise<ReturnServiceType> => {
  const patient = await patientsModel.getPatientById(id);

  if (!patient) {
    return {
      data: {
        message: 'Paciente não encontrado',
      },
      status: 404,
    }
  }

  const patientDeleted = await patientsModel.deletePatient(patient.id);

  return {
    status: 204,
    data: patientDeleted,
  }
}

const patientsService = {
  getAllPatients,
  getAllPatientByPhoneNumber,
  deletePatient,
}

export default patientsService;
