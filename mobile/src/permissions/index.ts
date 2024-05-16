import * as Notification from 'expo-notifications';

const requestNotificationPermission = async () => {
  try {
    const { status } = await Notification.getPermissionsAsync();

    await Notification.requestPermissionsAsync();

    if (status !== 'granted') {
      const { status: newStatus } = await Notification.requestPermissionsAsync();
    
      if (newStatus !== 'granted') {
        throw new Error('Permission denied');
      }
    }
  } catch (error) {
    console.error('Failed to get notification permission:', error.message);
  }
};

const main = async () => {
  try {
    await requestNotificationPermission();
  } catch (error) {
    console.error('Failed to initialize notification:', error.message);
  }
};

main();
