export type NotificationType = {
  id: string
  title: string;
  body: string
  date: string;
  type: 'chat' | 'plan' | 'warning' | 'notify' | string;
  hour: string;
}

export type NotificationInputType = Omit<NotificationType, 'date' | 'id' | 'hour'>