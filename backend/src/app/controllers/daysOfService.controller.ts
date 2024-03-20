import { Request, Response } from "express";
import daysOfAtendenceService from "../services/daysOfAtendence.service";

const createDaysOfAtendence = async (req: Request, res: Response) => {
  const { date, hourEnd, hourStart } = req.body;

  const newDayOfAtendence = await daysOfAtendenceService.createDaysOfAtendence({ date, hourEnd, hourStart });

  return res.status(newDayOfAtendence.status).json(newDayOfAtendence.data);
}

const getAllDaysOfAtendence = async (_: Request, res: Response) => {
  const daysOfAtendence = await daysOfAtendenceService.getAllDaysOfAtendence();

  return res.status(daysOfAtendence.status).json(daysOfAtendence.data);
}

const deleteDaysOfAtendenceById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedDayOfAtendence = await daysOfAtendenceService.deleteDaysOfAtendenceById(id);

  return res.status(deletedDayOfAtendence.status).json(deletedDayOfAtendence.data);
}

const daysOfAtendenceController = {
  createDaysOfAtendence,
  getAllDaysOfAtendence,
  deleteDaysOfAtendenceById
}

export default daysOfAtendenceController;
