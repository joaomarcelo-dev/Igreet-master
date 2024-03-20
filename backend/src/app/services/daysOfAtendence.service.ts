import { DaysOfAtendenceInputType } from "../../types/DaysOfAtendence.type";
import { ServiceReturnType } from "../../types/ServiceReturnType";
import daysOfAtendenceModel from "../models/daysOfAtendence.model";

const createDaysOfAtendence = async ({ date, hourEnd, hourStart, title }: DaysOfAtendenceInputType): Promise<ServiceReturnType> => {
  const newDayOfAtendence = await daysOfAtendenceModel.createDaysOfAtendence({ date, hourEnd, hourStart, title });

  return {
    data: newDayOfAtendence,
    status: 201
  }
};

const getAllDaysOfAtendence = async (): Promise<ServiceReturnType> => {
  const daysOfAtendence = await daysOfAtendenceModel.getAllDaysOfAtendence();

  return {
    data: daysOfAtendence,
    status: 200
  }
};

const deleteDaysOfAtendenceById = async (id: string): Promise<ServiceReturnType> => {
  const deletedDayOfAtendence = await daysOfAtendenceModel.deleteDaysOfAtendenceById(id);

  return {
    data: deletedDayOfAtendence,
    status: 200
  }
};

const daysOfAtendenceService = {
  createDaysOfAtendence,
  getAllDaysOfAtendence,
  deleteDaysOfAtendenceById
}

export default daysOfAtendenceService;
