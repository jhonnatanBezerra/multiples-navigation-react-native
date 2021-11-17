import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import { Home2 } from '../screens/home copy';
import { Tabs } from './bottom.routes';

const Stack = createNativeStackNavigator();

export const StackNavigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}