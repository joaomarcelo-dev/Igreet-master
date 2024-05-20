import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import Ionicons from 'react-native-vector-icons/Ionicons'
import ServicesList from '../screens/ServicesList';
import Users from '../screens/Users';
import Calendar from '../screens/Calendar';
import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import NewAppointment from '../screens/NewAppointment';

export default function TabBottom() {
  const TabBottom = createBottomTabNavigator();

  return (
    <TabBottom.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabBottom.Screen
        name="Home"
        component={ Home }
        options={{
          tabBarIcon: () => <Ionicons name='home-outline' size={25} />,
          tabBarLabel: '',
        }}
      />

      <TabBottom.Screen
        name="ServicesList"
        component={ ServicesList }
      />

      <TabBottom.Screen
        name="Users"
        component={ Users }
      />

      <TabBottom.Screen
        name="Calendar"
        component={ Calendar }
      />

      <TabBottom.Screen
        name="Settings"
        component={ Settings }
      />

      <TabBottom.Screen
        name="Profile"
        component={ Profile }
      />

      <TabBottom.Screen
        name='NewAppointment'
        component={ NewAppointment }
      />
    </TabBottom.Navigator>
  )
}

