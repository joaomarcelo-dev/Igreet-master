import prisma from "../../providers/prisma.provider";
import { ServiceInputType } from "../../types/Service.type";

const createService = async ({ expirationTime, phone, time }: ServiceInputType) => {
  const newService = await prisma.services.create({
    data: {
      expirationTime,
      phone,
      time,
    }
  });

  return newService;
};

const getAllServices = async () => {
  const services = await prisma.services.findMany();

  return services;
};

const deleteService = async (id: string) => {
  const service = await prisma.services.delete({
    where: {
      id
    }
  });

  return service;
};


const getServiceByPhone = async (phone: string) => {
  const service = await prisma.services.findFirst({
    where: {
      phone
    }
  });

  return service;
};

const deleteServiceByPhone = async (phone: string) => {
  const service = await prisma.services.findFirst({
    where: {
      phone
    }
  });

  if (!service) {
    return null;
  }

  const serviceDeleted = await prisma.services.delete({
    where: {
      id: service.id
    }
  });

  return serviceDeleted;
}

const getServiceById = async (id: string) => {
  const service = await prisma.services.findFirst({
    where: {
      id
    }
  });  
  
  return service;
};

const serviceModel = {
  createService,
  getAllServices,
  deleteService,
  getServiceByPhone,
  deleteServiceByPhone,
  getServiceById,
};

export default serviceModel;
