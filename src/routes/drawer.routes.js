import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feed } from '../screens/home copy 2';
import { Article } from '../screens/home copy 3';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} options={{ headerShown: false }} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  )
}