export type AppointmentType = {
  id: string
  date: string
  hour: string
  patientId: string
}

export type AppointmentInputType = Omit<AppointmentType, 'id'>