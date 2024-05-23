import { Request, Response } from "express";
import appointmentService from "../services/appointment.service";
import { AppointmentInputType, UpdateAppointmentProp } from "../../types/Appointment.type";

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
  const { dayOfAtencenceId, patientId, imgURL }: AppointmentInputType = req.body;
  const { data, status } = await appointmentService.createAppointment({ dayOfAtencenceId, patientId, imgURL });
  return res.status(status).json(data);
}

const appointmentController = {
  getAllAppointment,
  updateAppointment,
  createAppointment,
}

export default appointmentController;
