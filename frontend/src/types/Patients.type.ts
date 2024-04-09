export type PatientsType = {
  id: string;
  name: string;
  phone: string;
  cpf: string;
  birthDate: string;
  address: string;
}

export type PatientInputType = Omit<PatientsType, 'id'>;