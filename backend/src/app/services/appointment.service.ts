import { AppointmentInputType, UpdateAppointmentProp } from "../../types/Appointment.type";
import { ReturnServiceType } from "../../types/ReturnService.type";
import appointmentModel from "../models/appointment.model";
import DaysOfAtendenceModel from "../models/daysOfAtendence.model";
import patientsModel from "../models/patients.model";

const getAllAppointment = async (): Promise<ReturnServiceType> => {
  const allAppointment = await appointmentModel.getAllAppointment();

  return {
    data: allAppointment,
    status: 200,
  }
} 

const updateAppointment = async ({ id, status }: UpdateAppointmentProp): Promise<ReturnServiceType> => {
  const appointment = await appointmentModel.getAppointmentById(id);

  if (!appointment) {
    return {
      status: 404,
      data: {
        message: 'Atendimento não encontrado'
      }
    }
  }

  const appointmentUpdated = await appointmentModel.updateAppointment({ id, status });

  return {
    data: appointmentUpdated,
    status: 204,
  }
}

const createAppointment = async ({ dayOfAtencenceId, patientId, imgURL}: AppointmentInputType): Promise<ReturnServiceType> => {
  const patient = await patientsModel.getPatientById(patientId);
  const dayOfAtencence = await DaysOfAtendenceModel.getDaysOfAtendenceById(dayOfAtencenceId);

  if (!patient || !dayOfAtencence) {
    return {
      status: 404,
      data: {
        message: 'PacientId ou day-of-id Invalido'
      }
    }
  }

  const appointmentCreated = await appointmentModel.createAppointment({ dayOfAtencenceId, patientId, imgURL });
  
  return {
    data: appointmentCreated,
    status: 201,
  }
}

const appointmentService = {
  getAllAppointment,
  updateAppointment,
  createAppointment
}

export default appointmentService