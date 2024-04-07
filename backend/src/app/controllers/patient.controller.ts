import { Request, Response } from "express";
import patientService from "../services/patient.service";

const createPatient = async (req: Request, res: Response) => {
  const { address, birthDate, cpf, name, serviceId } = req.body;
  const { data, status } = await patientService.createPatient({ address, birthDate, cpf, name, serviceId })
  return res.status(status).json(data);
}

const getAllPatients = async (req: Request, res: Response) => {
  const { data, status } = await patientService.getAllPatients();
  return res.status(status).json(data);
}

const patientController = {
  createPatient,
  getAllPatients,
}

export default patientController;
