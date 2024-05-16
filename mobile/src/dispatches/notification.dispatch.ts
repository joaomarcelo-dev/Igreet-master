import * as Notifications from 'expo-notifications';
import { NotificationInputType } from '../Types/Notification.type';

type NotificationsProps = NotificationInputType & {
  trigger?: number
}

export const dispatchNotification = async ({ body, title, type = 'notify', trigger = null }: NotificationsProps) => {
  try {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
      },
      trigger,
    });
  } catch (error) {
    console.error('Failed to dispatch notification:', error);
  }
};
