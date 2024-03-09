import { Request, Response } from "express";
import appointmentService from "../services/appointment.service";

const createAppointment = async (req: Request, res: Response) => {
  const { address, birthDate, cpf, date, hour, name, serviceId } = req.body;
  const { data, status } = await appointmentService.createAppointment({ address, birthDate, cpf, date, hour, name, serviceId })
  return res.status(status).json(data);
}

const getAllAppointments = async (req: Request, res: Response) => {
  const { data, status } = await appointmentService.getAllAppointments();
  return res.status(status).json(data);
}

const appointmentController = {
  createAppointment,
  getAllAppointments,
}

export default appointmentController;