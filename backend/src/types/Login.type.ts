
export type LoginType = {
  id: string;
  photo: string;
  name: string;
  email: string;
  password: string;
}

export type LoginSingUpType = Omit<LoginType, 'id' | 'photo'>

export type LoginSingInType = Omit<LoginType, 'id' | 'photo' | 'name'>