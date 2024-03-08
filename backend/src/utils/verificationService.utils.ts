import { Whatsapp } from "venom-bot";
import serviceModel from "../app/models/services.model"
import dayjs from 'dayjs';

const verificationExpirationServiceTime = async (client: Whatsapp) => {
  const allServices = await serviceModel.getAllServices();

  const serviceExpireds = allServices.map((service) => {
    if (dayjs().isAfter(dayjs(service.expirationTime))) {
      serviceModel.deleteService(service.expirationTime);
      return service;
    }
  });

  serviceExpireds.forEach((service) => {
    if (service?.phone) {
      client.sendText(service.phone, `Olá, tudo bem? devido ao tempo de espera, seu atendimento foi cancelado.`);
    }
  });
}

export {
  verificationExpirationServiceTime
}