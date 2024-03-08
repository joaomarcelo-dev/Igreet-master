import { Whatsapp } from "venom-bot";
import serviceModel from "../app/models/services.model"
import dayjs from 'dayjs';

const verificationExpirationServiceTime = async (client: Whatsapp) => {
  const allServices = await serviceModel.getAllServices();

  const serviceExpireds = allServices.map(async(service) => {
    if (dayjs().isAfter(dayjs(service.expirationTime))) {
      await serviceModel.deleteService(service.id);
      client.sendText(service.phone, 'Seu atendimento expirou');
    }
  });
}

export {
  verificationExpirationServiceTime
}