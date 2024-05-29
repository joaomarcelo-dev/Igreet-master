import { AppointmentType } from "./Appointment.type"

export type DayOfAtencenceType = {
  id: string
  date: string
  hourStart: string
  hourEnd: string
  title: string
  notification: boolean;
  Appointments: AppointmentType[]
}

export type DaysOfAtendenceInputType = Omit<DayOfAtencenceType, 'id' |'Appointments'>