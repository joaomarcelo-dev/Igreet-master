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

export default appointmentRouter;