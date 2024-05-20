import { ReturnServiceType } from "../../types/ReturnService.type";
import DaysOfAtendenceModel from "../models/daysOfAtendence.model";

const getAllDaysOfAtendence = async (): Promise<ReturnServiceType> => {
  const allDaysOfAtendence = await DaysOfAtendenceModel.getAllDaysOfAtendence();

  return {
    data: allDaysOfAtendence,
    status: 200,
  }
}

const DaysOfAtendenceService = {
  getAllDaysOfAtendence,
}

export default DaysOfAtendenceService;
