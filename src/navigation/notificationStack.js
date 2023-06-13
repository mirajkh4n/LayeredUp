import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notifications from '../screens/Notifications';
const NotificationStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};
export default NotificationStack;
