import { Router } from "express";
import appointmentController from "../controllers/appointments.controller";

const appointmentsRouter = Router();

appointmentsRouter.route('/')
.get(
  appointmentController.getAllAppointments,
)
.post(
  appointmentController.createAppointment,
)
.put(
  appointmentController.updateAppointment,
)

export default appointmentsRouter;
