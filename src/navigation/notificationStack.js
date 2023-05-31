import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notification from '../screens/Notification';

const NotificationStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default NotificationStack;
