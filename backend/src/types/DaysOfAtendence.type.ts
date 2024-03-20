export type DaysOfAtendenceType = {
  id: string;
  date: string;
  hourStart: string;
  hourEnd: string;
  title: string;
}

export type DaysOfAtendenceInputType = Omit<DaysOfAtendenceType, 'id'>;