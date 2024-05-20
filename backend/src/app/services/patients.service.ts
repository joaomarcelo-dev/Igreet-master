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

const patientsService = {
  getAllPatients,
  getAllPatientByPhoneNumber,
}

export default patientsService;
