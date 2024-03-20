export type DaysOfAtendenceType = {
  id: string;
  date: string;
  hourStart: string;
  hourEnd: string;
}

export type DaysOfAtendenceInputType = Omit<DaysOfAtendenceType, 'id'>;