import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { colors } from './src/global';

import TaskManager from './src/services/taskManager.service';
import './src/permissions';
import './src/services/notification.service';

import Routers from './src/Routes';
import MessageAlert from './src/components/MessageAlert';
import { Provider } from 'react-redux';

import store from './src/redux/store';

export default function App() {
  useEffect(() => {
    TaskManager.register()
  }, []);

  return (
    <>
      <Provider store={ store }>
        <Routers />

        <StatusBar
          backgroundColor={ colors.primary }
          barStyle='light-content'
        />

        <MessageAlert />
      </Provider>
    </>
  );
}
