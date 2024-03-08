import serviceService from "../app/services/service.service";
import { ServiceInputType } from "../types/Service.type";

const addNumberInService = ({ expirationTime, phone, time }: ServiceInputType) => {
  const service = serviceService.createService({ phone, expirationTime, time });
  return service;
}
const createServiceUtils = {
  addNumberInService
}

export default addNumberInService;
