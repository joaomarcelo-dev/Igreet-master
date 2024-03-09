export type PatientType = {
  id: string
  name: string
  phone: string
  cpf: string
  birthDate: string
  address: string
}

export type PatientTypeInput = Omit<PatientType, 'id'> & {
  serviceId: string;
}