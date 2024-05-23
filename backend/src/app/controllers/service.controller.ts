import { Request, Response } from "express";
import serviceService from "../services/service.service";
import { ServiceInputType } from "../../types/Service.type";

const createService = async (req: Request, res: Response) => {
  const { imgURL, phone }:Omit<ServiceInputType, 'code'> = req.body;  
  const { data, status } = await serviceService.createService({ imgURL, phone });

  return res.status(status).json(data);
}

const getService = async (req: Request, res: Response) => {
  const { code } = req.query;
  if (typeof code !== 'string') return res.json('Tipo do código invalido')
    
  const { data, status } = await serviceService.getService(code);
  return res.status(status).json(data);
}

const serviceController = {
  createService,
  getService,
}

export default serviceController;
