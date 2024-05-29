import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Users from '../screens/Users';
import Calendar from '../screens/Calendar';
import Profile from '../screens/Profile';
import NewAppointment from '../screens/NewAppointment';
import MessageAlert from '../components/MessageAlert';
import Login from '../screens/Login';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../Types/RootReducer.type';
import AppointmentHistory from '../screens/AppointmentHistory';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import SendDocument from '../screens/SendDocument';

export default function TabBottom() {
  const TabBottom = createBottomTabNavigator();
  const { token } = useSelector((root: RootReducerType) => root.user);  

  return (
    <TabBottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          display: 'none'
        },
      }}
    >
      {
        token ? (
          <>
              <TabBottom.Screen
                name="Home"
                component={ Home }
                options={{
                  tabBarButton: () => null,
                }}
              />
        
              <TabBottom.Screen
                name="Users"
                component={ Users }
                options={{
                  tabBarButton: () => null,
                }}
              />
        
              <TabBottom.Screen
                name="Calendar"
                component={ Calendar }
                options={{
                  tabBarButton: () => null,
                }}
              />
        
              <TabBottom.Screen
                name="Settings"
                component={ Settings }
                options={{
                  tabBarButton: () => null,
                }}
              />
        
              <TabBottom.Screen
                name="Profile"
                component={ Profile }
                options={{
                  tabBarButton: () => null,
                }}
              />
        
              <TabBottom.Screen
                name='NewAppointment'
                component={ NewAppointment }
                options={{
                  tabBarButton: () => null,
                }}
              />

              <TabBottom.Screen
                name='AppointmentHistory'
                component={ AppointmentHistory }
                options={{
                  tabBarButton: () => null,
                }}
              />

              <TabBottom.Screen
                name='Notifications'
                component={ Notifications }
                options={{
                  tabBarButton: () => null,
                }}
              />

              <TabBottom.Screen
                name='SendDocument'
                component={ SendDocument }
                options={{
                  tabBarButton: () => null,
                }}
              />

          </>
        ) : (
          <TabBottom.Screen
          name="Login"
          component={ Login }
          />
        )
      }
    </TabBottom.Navigator>
  )
}

