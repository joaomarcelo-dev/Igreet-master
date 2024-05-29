import { PatientType } from "./Patient.type";

export type AppointmentType = {
  id: string
  patientId?: string;
  complet: boolean;
  dayOfAtencenceId?: string;
  createAt: Date;
  updateAt: Date;
  patient: PatientType;
  imgURL?: string;
}

export type UpdateAppointmentProp = {
  id: string;
  status: boolean;
}


export type AppointmentInputType = Omit<AppointmentType, 'id' | 'complet' | 'updateAt' | 'createAt' | 'patient'>