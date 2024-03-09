import prisma from "../../providers/prisma.provider"
import { PatientTypeInput } from "../../types/Patients.type"

const createPatients = async ({ address, birthDate, cpf, name, phone }: Omit<PatientTypeInput, 'serviceId'>) => {
  const newPatients = await prisma.patients.create({
    data: {
      address,
      birthDate,
      cpf,
      name,
      phone,
    }
  });

  return newPatients;
}

const getPatientById = async (id: string) => {
  const patitient = await prisma.patients.findFirst({
    where: {
      id
    }
  });
}

const getPatientByCpf = async (cpf: string) => {
  const patient = await prisma.patients.findFirst({
    where: {
      cpf,
    },
    include: {
      Appointments: true,
    }
  });

  return patient;
}

const getAllPatients = async () => {
  const allPatients = await prisma.patients.findMany();
  return allPatients;
}

const patientsModel = {
  createPatients,
  getAllPatients,
  getPatientById,
  getPatientByCpf
}

export default patientsModel;