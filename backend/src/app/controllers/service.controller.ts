import { Request, Response } from "express";
import serviceService from "../services/service.service";
import { dayjsProvider } from "../../providers/dayjs.provider";

const createService = async (req: Request, res: Response) => {
  const { phone, time } = req.body;
  const expirationTime = dayjsProvider.generateUnixTimestamp().toString();

  const { data, status } = await serviceService.createService({ expirationTime, phone, time });
  return res.status(status).json(data);
}

const getAllServices = async (req: Request, res: Response) => {
  const services = await serviceService.getAllServices();
  return res.status(200).json(services);
}

const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  await serviceService.deleteService(id);
  return res.status(204).end();
}

const getServiceById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { data, status } = await serviceService.getServiceById(id);
  return res.status(status).json(data);
}

const serviceController = {
  createService,
  getAllServices,
  deleteService,
  getServiceById,
}

export default serviceController;
