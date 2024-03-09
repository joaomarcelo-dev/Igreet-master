import { ServiceInputType } from "../../types/Service.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import serviceModel from "../models/services.model";

const createService = async ({ expirationTime, phone, time }: ServiceInputType): Promise<ServiceReturnType> => {
  const existService = await serviceModel.getServiceByPhone(phone);
  if (existService) {
    return {
      data: existService,
      status: 200,
    }
  }
  const newService = await serviceModel.createService({ expirationTime, phone, time })
  
  return {
    data: newService,
    status: 201,
  };
};

const getAllServices = () => {
  const services = serviceModel.getAllServices();
  return services;
};

const deleteService = (id: string) => {
  const service = serviceModel.deleteService(id);
  return service;
};

const getServiceByPhone = (phone: string) => {
  const service = serviceModel.getServiceByPhone(phone);
  return service;
}

const getServiceById = async (id: string): Promise<ServiceReturnType> => {
  const service = await serviceModel.getServiceById(id);

  if (!service) {
    return {
      status: 404,
      data: {
        message: 'Service not found'
      }
    }
  }

  return {
    data: service,
    status: 200,
  };
}

const serviceService = {
  createService,
  getAllServices,
  deleteService,
  getServiceByPhone,
  getServiceById
};

export default serviceService;
