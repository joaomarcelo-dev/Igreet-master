import prisma from "../../providers/prisma.provider";

const getAllDaysOfAtendence = async () => prisma.daysOfAtendence.findMany()

const DaysOfAtendenceModel = {
  getAllDaysOfAtendence,
}

export default DaysOfAtendenceModel;