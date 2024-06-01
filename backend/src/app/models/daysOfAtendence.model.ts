import prisma from "../../providers/prisma.provider";
import { DaysOfAtendenceInputType } from "../../types/DaysOfAtendence.type";

const getAllDaysOfAtendence = async (status: any) => {
  if (status === 'true') {
    return prisma.daysOfAtendence.findMany({
      orderBy: {
        date: 'desc'
      },
      where: {
        active: status === 'true',
      },
      include: {
        Appointments: {
          include: {
            patient: true,
          },
          where: {
            complet: true
          }
        }
      }
    });
  }

  return prisma.daysOfAtendence.findMany({
    orderBy: {
      date: 'desc'
    },
    include: {
      Appointments: {
        include: {
          patient: true,
        },
        where: {
          complet: true
        }
      }
    }
  });

} 

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