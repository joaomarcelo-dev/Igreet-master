import { Request, Response } from "express";
import admsService from "../services/adms.service";

const createAdm = async (req: Request, res: Response) => {
  const { email, name, password, photo } = req.body;
  const { data, status } = await admsService.createAdm({ email, name, password, photo });
  return res.status(status).json(data);
}

const deleteAdm = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data, status } = await admsService.deleteAdm(id);
  return res.status(status).json(data);
}

const admsController = {
  createAdm,
  deleteAdm
}

export default admsController;
