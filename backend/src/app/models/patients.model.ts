import prisma from "../../providers/prisma.provider";

const getAllPatients = async () => prisma.patients.findMany();

const getAllPatientByPhoneNumber = async (phone: string) => prisma.patients.findMany({
  where: {
    phone,
  }
})

const getPatientById = async (id: string) => prisma.patients.findUnique({
  where: {
    id,
  }
})

const patientsModel = {
  getAllPatients,
  getAllPatientByPhoneNumber,
  getPatientById
}

export default patientsModel;
