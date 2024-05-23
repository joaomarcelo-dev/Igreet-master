import { Request, Response, query } from "express";
import patientsService from "../services/patients.service";

const getAllPatients = async (req: Request, res: Response) => {
  const { phoneNumber } = req.query;

  if (typeof phoneNumber === 'string') {
    const { data, status } = await patientsService.getAllPatientByPhoneNumber(phoneNumber)
    return res.status(status).json(data);
  }

  const { data, status } = await patientsService.getAllPatients();
  return res.status(status).json(data);
}

const patientsController = {
  getAllPatients,
}

export default patientsController;