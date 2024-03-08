import { ServiceInputType } from "../../types/Service.type";
import serviceModel from "../models/services.model";

const createService = ({ expirationTime, phone, time }: ServiceInputType) => {
  const newService = serviceModel.createService({ expirationTime, phone, time })
  return newService;
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

const serviceService = {
  createService,
  getAllServices,
  deleteService,
  getServiceByPhone
};

export default serviceService;
