import { AppointmentInputType } from "../../types/Appointment.type";
import { PatientTypeInput } from "../../types/Patients.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import appointmentModel from "../models/appointments.model";
import patientsModel from "../models/patients.model";
import serviceModel from "../models/services.model";

const createAppointment = async ({
  date,
  hour,
  address,
  birthDate,
  cpf,
  name,
  serviceId
}:
  Omit<AppointmentInputType, 'patientId'> &
  Omit<PatientTypeInput, 'phone'>
): Promise<ServiceReturnType> => {
  const service = await serviceModel.getServiceById(serviceId);
  if (!service) {
    return {
      data: {
        message: 'Nehum serviço foi agendado vai whatsapp para vc'
      },
      status: 401,
    }
  }
  
  const patient = await patientsModel.getPatientByCpf(cpf);

  if (!patient) {

    const newPatient = await patientsModel.createPatients({ address, birthDate, cpf, name, phone: service.phone });

    const newAppointment = await appointmentModel.createAppointment({ date, hour, patientId: newPatient.id });

    await serviceModel.deleteService(service.id);

    return {
      data: newAppointment,
      status: 201,
    }
  }

  const newAppointment = await appointmentModel.createAppointment({ date, hour, patientId: patient.id });

  await serviceModel.deleteService(service.id);

  return {
    status: 201,
    data: newAppointment
  };
}

const getAllAppointments = async (): Promise<ServiceReturnType> => {
  const appointments = await appointmentModel.getAllAppointments();
  return {
    status: 200,
    data: appointments
  };
}

const getAppointmentByDateEndPhone = async ({ date, phone }:{date: string, phone: string}): Promise<ServiceReturnType> => {
  const appoinmet = await appointmentModel.getAppointmentByDateEndPhone({date, phone})

  if (appoinmet == null) {
    return {
      status: 404,
      data: null
    }
  }

  return {
    data: appoinmet,
    status: 200,
  }
}

const appointmentService = {
  createAppointment,
  getAllAppointments,
};

export default appointmentService;

