import prisma from "../../providers/prisma.provider";
import { ServiceInputType } from "../../types/Service.type";

const createService = async ({ code, imgURL, phone }: ServiceInputType) => prisma.service.create({
  data: {
    code,
    imgURL,
    phone,
  },
});

const getServiceByPhone = async (phone: string) => prisma.service.findFirst({
  where: {
    phone,
  },
});

const getServiceByCode = async (code: string) => prisma.service.findUnique({
  where: {
    code,
  }
});

const deleteServiceById = async (id: string) => prisma.service.delete({
  where: {
    id,
  }
});

const getServiceById = async (id: string) => prisma.service.findUnique({
  where: {
    id,
  }
})

const serviceModel = {
  createService,
  getServiceByPhone,
  getServiceByCode,
  deleteServiceById,
  getServiceById,
}

export default serviceModel;
