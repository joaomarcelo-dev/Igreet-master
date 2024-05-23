import { ReturnServiceType } from "../../types/ReturnService.type";
import { ServiceInputType } from "../../types/Service.type";
import utils from "../../utils";
import serviceModel from "../models/service.model";

import { v4 as uuidV4 } from 'uuid';

const createService = async ({ imgURL, phone }: Omit<ServiceInputType, 'code'>): Promise<ReturnServiceType> => {
  const service = await serviceModel.getServiceByPhone(phone);

  if (service) {
    return {
      status: 200,
      data: service,
    }
  }

  const serviceCreated = await serviceModel.createService({
    code: uuidV4().slice(0, 8),
    imgURL,
    phone,
  });

  return {
    data: serviceCreated,
    status: 201,
  }
}

const getService = async (code: string): Promise<ReturnServiceType> => {
  const service = await serviceModel.getServiceByCode(code);

  if (!service) {
    return {
      status: 404,
      data: {
        message: 'Nenhum Serviço foi encontrado'
      }
    }
  }

  return {
    status: 200,
    data: service,
  }
}

const serviceService = {
  createService,
  getService,
}

export default serviceService;
