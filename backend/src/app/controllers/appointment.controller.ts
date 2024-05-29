import { Request, Response } from "express";
import appointmentService from "../services/appointment.service";
import { AppointmentInputType, UpdateAppointmentProp } from "../../types/Appointment.type";
import { PatientInputType } from "../../types/Patient.type";

const getAllAppointment = async (req: Request, res: Response) => {
  const { data, status } = await appointmentService.getAllAppointment();
  return res.status(status).json(data)
};

const updateAppointment = async (req: Request, res: Response) => {
  const { id, status }: UpdateAppointmentProp = req.body;
  const { data, status: statusRequest} = await appointmentService.updateAppointment({ id, status });
  return res.status(statusRequest).json(data)
}

const createAppointment = async (req: Request, res: Response) => {  
  const { dayOfAtencenceId, patientId, imgURL, address, birthDate, cpf, name, phone, serviceId }: AppointmentInputType & PatientInputType & { serviceId: string } = req.body;
  const { token_valid } = res.locals;
  const { data, status } = await appointmentService.createAppointment({ dayOfAtencenceId, patientId, imgURL, address, birthDate, cpf, name, phone, serviceId, token_valid });  
  return res.status(status).json(data);
}

const deleteAppointmentById = async (req: Request, res: Response) => {
  const { id } = req.query;

  if (!id || typeof id !== 'string') return res.json({ message: 'Tipo de ID inválido' });

  const { data,  status} = await appointmentService.deleteAppointmentById(id);
  return res.status(status).json(data);

}

const appointmentController = {
  getAllAppointment,
  updateAppointment,
  createAppointment,
  deleteAppointmentById
}

export default appointmentController;
