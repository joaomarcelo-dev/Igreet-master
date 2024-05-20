import { Request, Response } from "express";
import DaysOfAtendenceService from "../services/daysOfAtendence.service";

const getAllDaysOfAtendence = async (req: Request, res: Response) => {
  const { data, status } = await DaysOfAtendenceService.getAllDaysOfAtendence();

  return res.status(status).json(data);
}

const DaysOfAtendenceController = {
  getAllDaysOfAtendence,
}

export default DaysOfAtendenceController;
