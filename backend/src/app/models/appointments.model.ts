import e from "express";
import prisma from "../../providers/prisma.provider";
import { AppointmentInputType } from "../../types/Appointment.type";

const createAppointment = async ({ date, hour, patientId, complet }: AppointmentInputType) => {
  const newAppointment = await prisma.appointments.create({
    data: {
      date,
      hour,
      patientId,
    },
    include: {
      patient: true
    }
  });

  return newAppointment;
};

const getAllAppointments = async () => {
  const appointments = await prisma.appointments.findMany({
    include: {
      patient: true
    }
  });

  return appointments;
};

const deleteAppointment = async (id: string) => {
  const appointment = await prisma.appointments.delete({
    where: {
      id
    }
  });

  return appointment;
};  

const getAppointmentByDateEndPhone = async ({ date, phone }:{date: string, phone: string}) => {
  const appoinmet = await prisma.appointments.findFirst({
    where: {
      date,
      patient: {
        phone
      }
    }
  })
}

const appointmentModel = {
  createAppointment,
  getAllAppointments,
  deleteAppointment,
  getAppointmentByDateEndPhone,
};

export default appointmentModel;
