import prisma from "../../providers/prisma.provider";
import { PatientInputType } from "../../types/Patient.type";

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
});

const createPatient = async ({ address, birthDate, cpf, name, phone }: PatientInputType) => prisma.patients.create({
  data: {
    address,
    birthDate,
    cpf,
    name,
    phone,
  }
});

const deletePatient = async (id: string) => prisma.patients.delete({
  where: {
    id,
  },
  select: {
    Appointments: true,
  }
});

const patientsModel = {
  getAllPatients,
  getAllPatientByPhoneNumber,
  getPatientById,
  createPatient,
}

export default patientsModel;
