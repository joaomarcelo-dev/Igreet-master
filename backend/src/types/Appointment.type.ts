export type AppointmentType = {
  id: string
  date: string
  hour: string
  patientId: string
  complet?: boolean;
}

export type AppointmentInputType = Omit<AppointmentType, 'id'>