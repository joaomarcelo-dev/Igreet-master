import prisma from "../../providers/prisma.provider"
import { AppointmentInputType } from "../../types/Appointment.type";

const getAllAppointment = async () => prisma.appointments.findMany({
  include: {
    patient: true,
  },
  orderBy: {
    createAt: 'asc'
  }
});


type UpdateAppointmentProp = {
  id: string;
  status: boolean;
}

const updateAppointment = async ({ id, status }: UpdateAppointmentProp) => prisma.appointments.update({
  where: {
    id,
  },
  data: {
    complet: status,
  }
})

const getAppointmentById = async (id: string) => prisma.appointments.findFirst({
  where: {
    id,
  }
});

const createAppointment = async ({ dayOfAtencenceId, patientId, imgURL }: AppointmentInputType) => prisma.appointments.create({
  data: {
    dayOfAtencenceId,
    patientId,
    imgURL,
  }
});

const deleteAppointmentById = async (id: string) => prisma.appointments.delete({
  where: {
    id,
  }
});


const appointmentModel = {
  getAllAppointment,
  updateAppointment,
  getAppointmentById,
  createAppointment,
  deleteAppointmentById,
}

export default appointmentModel;
