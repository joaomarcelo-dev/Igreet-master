import { PatientTypeInput } from "../../types/Patients.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import patientsModel from "../models/patients.model";
import serviceModel from "../models/services.model";
import serviceService from "./service.service";


type ExtendedPatientTypeInput = PatientTypeInput & { authorization: string | undefined };


const createPatient = async ({ address, birthDate, cpf, name, serviceId, authorization, phone }: ExtendedPatientTypeInput): Promise<ServiceReturnType> => {
  const service = await serviceModel.getServiceById(serviceId);

  if (!service && !authorization) {
    return {
      data: {
        message: 'Sem autorização para criar um paciente.'
      },
      status: 401,
    }
  }

  const newPatient = await patientsModel.createPatients({ address, birthDate, cpf, name, phone: service?.phone || phone });

  return {
    data: newPatient,
    status: 200,
  }
}

const getAllPatients = async (): Promise<ServiceReturnType> => {
  const patients = await patientsModel.getAllPatients();

  return {
    data: patients,
    status: 200,
  }
}

const patientService = {
  createPatient,
  getAllPatients,
}

export default patientService;