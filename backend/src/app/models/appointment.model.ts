import prisma from "../../providers/prisma.provider"

const getAllAppointment = async () => prisma.appointments.findMany({
  include: {
    patient: true,
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

const appointmentModel = {
  getAllAppointment,
  updateAppointment,
  getAppointmentById,
}

export default appointmentModel;
