import { DaysOfAtendenceInputType } from "../../types/DaysOfAtendence.type";
import { ReturnServiceType } from "../../types/ReturnService.type";
import DaysOfAtendenceModel from "../models/daysOfAtendence.model";

const getAllDaysOfAtendence = async (): Promise<ReturnServiceType> => {
  const allDaysOfAtendence = await DaysOfAtendenceModel.getAllDaysOfAtendence();

  return {
    data: allDaysOfAtendence,
    status: 200,
  }
}

const createDayOfAtendence = async ({ date, hourEnd, hourStart, title, notification }: DaysOfAtendenceInputType): Promise<ReturnServiceType> => {
  const daysOfAtendenceCreated = await DaysOfAtendenceModel.createDayOfAtendence({ date, hourEnd, hourStart, title, notification });

  return {
    data: daysOfAtendenceCreated,
    status: 201,
  }
}

const deletDaysOfAtendenceById = async (id: string): Promise<ReturnServiceType> => {
  const dayofAtendence = await DaysOfAtendenceModel.getDaysOfAtendenceById(id);

  if (!dayofAtendence) {
    return {
      data: {
        message: 'Nenhum serviço encontrado'
      },
      status: 404,
    }
  }

  if (dayofAtendence.Appointments.length) {
    const dayofAtendenceDisabled = await DaysOfAtendenceModel.disableDayOfAtendenceById(id);

    return {
      status: 204,
      data: dayofAtendenceDisabled,
    }
  }

  const dayofAtendenceDeleted = await DaysOfAtendenceModel.deletDaysOfAtendenceById(id);

  return {
    status: 204,
    data: dayofAtendenceDeleted
  }
}

const DaysOfAtendenceService = {
  getAllDaysOfAtendence,
  createDayOfAtendence,
  deletDaysOfAtendenceById,
}

export default DaysOfAtendenceService;
