import prisma from "../../providers/prisma.provider";
import { DaysOfAtendenceInputType } from "../../types/DaysOfAtendence.type";

const getAllDaysOfAtendence = async () => prisma.daysOfAtendence.findMany({
  orderBy: {
    date: 'asc'
  },
  where: {
    active: true,
  },
  include: {
    Appointments: true
  }
})

const createDayOfAtendence = async ({ date, hourEnd, hourStart, title, notification }: DaysOfAtendenceInputType) => prisma.daysOfAtendence.create({
  data: {
    date,
    hourEnd,
    hourStart,
    title,
    notification
  }
});

const getDaysOfAtendenceById = async (id: string) => prisma.daysOfAtendence.findUnique({
  where: {
    id,
  },
  include: {
    Appointments: true
  }
})

const deletDaysOfAtendenceById = async (id: string) => prisma.daysOfAtendence.delete({
  where: {
    id,
  },
});

const disableDayOfAtendenceById = async (id: string) => prisma.daysOfAtendence.update({
  where: {
    id,
  },
  data: {
    active: false
  }
}) 

const DaysOfAtendenceModel = {
  getAllDaysOfAtendence,
  createDayOfAtendence,
  getDaysOfAtendenceById,
  deletDaysOfAtendenceById,
  disableDayOfAtendenceById,
}

export default DaysOfAtendenceModel;