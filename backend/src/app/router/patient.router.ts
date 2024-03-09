import { Router } from "express";
import patientController from "../controllers/patient.controller";

const patientRouter = Router();

patientRouter.route('/')
.post(
  patientController.createPatient,
)

export default patientRouter;