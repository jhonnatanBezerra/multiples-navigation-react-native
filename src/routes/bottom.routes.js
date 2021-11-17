import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home2 } from '../screens/home copy';
import { Home } from '../screens/home';
import { DrawerNav } from './drawer.routes';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home2" component={Home2} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Drawer" component={DrawerNav} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}