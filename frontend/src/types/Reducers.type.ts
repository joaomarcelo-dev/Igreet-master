import { Appointment } from "./Appoinments.type";

export type AppReducerType = {
  token: string; 
  appointments: Appointment[];
}

export type RootReducerType = {
  app: AppReducerType;
}