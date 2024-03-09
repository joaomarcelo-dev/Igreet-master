import { PatientTypeInput } from "../../types/Patients.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import patientsModel from "../models/patients.model";
import serviceModel from "../models/services.model";
import serviceService from "./service.service";

const createPatient = async ({ address, birthDate, cpf, name, serviceId }: Omit<PatientTypeInput, 'phone'>): Promise<ServiceReturnType> => {
  const service = await serviceModel.getServiceById(serviceId);

  if (!service) {
    return {
      data: {
        message: 'No agendamente in Service'
      },
      status: 401,
    }
  }

  const newPatient = await patientsModel.createPatients({ address, birthDate, cpf, name, phone: service?.phone });

  return {
    data: newPatient,
    status: 200,
  }
}

const patientService = {
  createPatient,
}

export default patientService;