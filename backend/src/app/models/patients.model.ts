import prisma from "../../providers/prisma.provider";

const getAllPatients = async () => prisma.patients.findMany();

const getAllPatientByPhoneNumber = async (phone: string) => prisma.patients.findMany({
  where: {
    phone,
  }
})

const patientsModel = {
  getAllPatients,
  getAllPatientByPhoneNumber
}

export default patientsModel;
