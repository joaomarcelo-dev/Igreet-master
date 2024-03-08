import prisma from "../../providers/prisma.provider";
import { ServiceInputType } from "../../types/Service.type";

const createService = ({ expirationTime, phone, time }: ServiceInputType) => {
  const newService = prisma.services.create({
    data: {
      expirationTime,
      phone,
      time,
    }
  });

  return newService;
};

const getAllServices = () => {
  const services = prisma.services.findMany();

  return services;
};

const deleteService = (id: string) => {
  const service = prisma.services.delete({
    where: {
      id
    }
  });

  return service;
};

const serviceModel = {
  createService,
  getAllServices,
  deleteService
};

export default serviceModel;
