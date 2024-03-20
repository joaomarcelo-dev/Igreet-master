import prisma from "../../providers/prisma.provider";
import { DaysOfAtendenceInputType } from "../../types/DaysOfAtendence.type";

const createDaysOfAtendence = async ({ date, hourEnd, hourStart, title }: DaysOfAtendenceInputType) => {
  const newDayOfAtendence = await prisma.daysOfAtendence.create({
    data: {
      date,
      hourEnd,
      hourStart,
      title,
    }
  });

  return newDayOfAtendence;
}

const getAllDaysOfAtendence = async () => {
  const daysOfAtendence = await prisma.daysOfAtendence.findMany();

  return daysOfAtendence;
}

const deleteDaysOfAtendenceById = async (id: string) => {
  const deletedDayOfAtendence = await prisma.daysOfAtendence.delete({
    where: {
      id
    }
  });

  return deletedDayOfAtendence;
}

const daysOfAtendenceModel = {
  createDaysOfAtendence,
  getAllDaysOfAtendence,
  deleteDaysOfAtendenceById
}

export default daysOfAtendenceModel;
