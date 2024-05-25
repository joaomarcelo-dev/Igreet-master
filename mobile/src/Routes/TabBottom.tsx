import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Users from '../screens/Users';
import Calendar from '../screens/Calendar';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import NewAppointment from '../screens/NewAppointment';
import MessageAlert from '../components/MessageAlert';

export default function TabBottom() {
  const TabBottom = createBottomTabNavigator();

  return (
    <TabBottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBadgeStyle: {
          display: 'none'
        }
      }}
    >
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
    </TabBottom.Navigator>
  )
}

