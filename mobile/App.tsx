import Routers from './src/Routes';
import { StatusBar } from 'react-native';

import './src/permissions';
import TaskManager from './src/services/taskManager.service';

import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { colors } from './src/global';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  }
});

export default function App() {
  useEffect(() => {
    TaskManager.register()
  }, [])
  return (
    <>
      <Routers />

      <StatusBar
        backgroundColor={ colors.primary }
        barStyle='light-content'
      />
    </>
  );
}
