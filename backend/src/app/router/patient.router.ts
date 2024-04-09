import { Router } from "express";
import patientController from "../controllers/patient.controller";

const patientRouter = Router();

patientRouter.route('/')
.post(
  patientController.createPatient,
)
.get(
  patientController.getAllPatients,
);


export default patientRouter;