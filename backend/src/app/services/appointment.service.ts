import { AppointmentInputType } from "../../types/Appointment.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import appointmentModel from "../models/appointments.model";

const createAppointment = async ({ date, hour, patientId }: AppointmentInputType): Promise<ServiceReturnType> => {
  const newAppointment = await appointmentModel.createAppointment({ date, hour, patientId });
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

const deleteAppointment = async (id: string): Promise<ServiceReturnType> => {
  const appointment = await appointmentModel.deleteAppointment(id);
  return {
    status: 200,
    data: appointment
  };
}

const appointmentService = {
  createAppointment,
  getAllAppointments,
  deleteAppointment
};

export default appointmentService;

