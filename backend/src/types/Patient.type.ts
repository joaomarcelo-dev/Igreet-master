import { AppointmentType } from "./Appointment.type"

export type PatientType = {
  id: string
  name: string
  phone: string
  cpf: string
  birthDate: string
  address: string
}

export type PatientInputType = Omit<PatientType, 'id'>