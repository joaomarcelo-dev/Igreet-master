import { Router } from "express";
import patientsController from "../controllers/patients.controller";

const patientsRouter = Router();

patientsRouter.route('/')
.get(
  patientsController.getAllPatients
)

export default patientsRouter;