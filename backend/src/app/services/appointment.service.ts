import { UpdateAppointmentProp } from "../../types/Appointment.type";
import { ReturnServiceType } from "../../types/ReturnService.type";
import appointmentModel from "../models/appointment.model";

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

const appointmentService = {
  getAllAppointment,
  updateAppointment,
}

export default appointmentService