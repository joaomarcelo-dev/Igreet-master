import { AdmsInput } from "../../types/Adms.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import admsModel from "../models/adms.model";

const createAdm = async ({ email, name, password, photo }: AdmsInput): Promise<ServiceReturnType> => {
  const newAdm = await admsModel.createAdm({email, name, password, photo});

  return {
    data: newAdm,
    status: 201,
  }
}

const deleteAdm = async (id: string): Promise<ServiceReturnType> => {
  const adm = await admsModel.deleteAdm(id);

  return {
    data: adm,
    status: 200,
  }
}

const admsService = {
  createAdm,
  deleteAdm
}

export default admsService
