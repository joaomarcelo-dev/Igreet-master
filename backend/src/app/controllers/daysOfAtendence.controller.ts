import { Request, Response } from "express";
import DaysOfAtendenceService from "../services/daysOfAtendence.service";
import { DaysOfAtendenceInputType } from "../../types/DaysOfAtendence.type";

const getAllDaysOfAtendence = async (req: Request, res: Response) => {
  const { status: statusRequest } = req.query;

  const { data, status } = await DaysOfAtendenceService.getAllDaysOfAtendence(statusRequest);
  return res.status(status).json(data);
};

const createDayOfAtendence = async (req: Request, res: Response) => {
  const { date, hourEnd, hourStart, title, notification }: DaysOfAtendenceInputType = req.body;
  const { data, status } = await DaysOfAtendenceService.createDayOfAtendence({ date, hourEnd, hourStart, title, notification });
  return res.status(status).json(data);
};

const deletDaysOfAtendenceById = async (req: Request, res: Response) => {
  const { id } = req.body;
  const { data, status} = await DaysOfAtendenceService.deletDaysOfAtendenceById(id);
  return res.status(status).json(data)
}

const DaysOfAtendenceController = {
  getAllDaysOfAtendence,
  createDayOfAtendence,
  deletDaysOfAtendenceById,
};

export default DaysOfAtendenceController;
