export type UpdateAppointmentProp = {
  id: string;
  status: boolean;
}

export type AppointmentType = {
  id: string;
  patientId: string;
  dayOfAtencenceId: string;
  complet: boolean;
  updateAt: Date;
  createAt: Date;
  imgURL?: string;
}


export type AppointmentInputType = Omit<AppointmentType, 'id' | 'complet' | 'updateAt' | 'createAt'>