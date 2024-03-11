export type AdmsType = {
  id: string
  photo: string
  name: string
  email: string
  password: string
}

export type AdmsInput = Omit<AdmsType, 'id'>