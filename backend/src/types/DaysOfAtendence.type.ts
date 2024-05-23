export type DaysOfAtendenceType = {
  id: string
  date: string
  hourStart: string
  hourEnd: string
  title: string
  active: boolean
  notification: boolean
}

export type DaysOfAtendenceInputType = Omit<DaysOfAtendenceType, 'id' | 'active'>