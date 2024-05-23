export type DayOfAtencenceType = {
  id: string
  date: string
  hourStart: string
  hourEnd: string
  title: string
  notification: boolean;
}

export type DaysOfAtendenceInputType = Omit<DayOfAtencenceType, 'id'>