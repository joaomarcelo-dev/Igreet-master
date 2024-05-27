import { Router } from "express";
import patientsController from "../controllers/patients.controller";
import authMiddleware from "../middleware/auth.middleware";

const patientsRouter = Router();

patientsRouter.route('/')
.get(
  patientsController.getAllPatients
)
.delete(
  authMiddleware.authToken,
  patientsController.deletePatient
)

export default patientsRouter;