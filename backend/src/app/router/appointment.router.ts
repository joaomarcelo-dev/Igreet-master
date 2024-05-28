import { Router } from "express";
import appointmentController from "../controllers/appointment.controller";
import authMiddleware from "../middleware/auth.middleware";

const appointmentRouter = Router();

appointmentRouter.route('/')
.get(
  authMiddleware.authToken,
  appointmentController.getAllAppointment
)
.put(
  // authMiddleware.authToken,
  appointmentController.updateAppointment,
)
.post(
  authMiddleware.authToken,
  appointmentController.createAppointment,
)
.delete(
  authMiddleware.authToken,
  appointmentController.deleteAppointmentById,
)

export default appointmentRouter;