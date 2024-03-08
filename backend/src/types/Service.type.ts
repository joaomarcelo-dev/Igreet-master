export type ServiceType = {
  id: string
  phone: string
  time: string
  expirationTime: string
}

export type ServiceInputType = Omit<ServiceType, 'id'>