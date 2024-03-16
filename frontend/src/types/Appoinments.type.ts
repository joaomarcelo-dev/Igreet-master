export type AppointmentDataSubmit = {
  address: string,
  birthDate: string,
  cpf: string,
  date: string,
  hour: string,
  name: string,
  serviceId: string,
}

export type Appointment = {
  id: string
  date: string,
  hour: string,
  patientId: string,
  patient: {
    id: string,
    name: string,
    phone: string,
    cpf: string,
    birthDate: string,
    address: string,
  },
  complet: boolean,
}

export type UpdateStatusAppointment = {
  id: string,
  complet: boolean,
}

export type AppoinmentsCreated = {
  data: Appointment,
  status: number,
}