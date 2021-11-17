import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigate } from './stack.routes';


export const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigate />
    </NavigationContainer>
  )
}