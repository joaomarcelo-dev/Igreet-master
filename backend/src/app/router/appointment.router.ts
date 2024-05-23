import { Router } from "express";
import appointmentController from "../controllers/appointment.controller";

const appointmentRouter = Router();

appointmentRouter.route('/')
.get(
  appointmentController.getAllAppointment
)
.put(
  appointmentController.updateAppointment,
)
.post(
  appointmentController.createAppointment,
)

export default appointmentRouter;