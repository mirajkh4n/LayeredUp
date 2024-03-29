import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/profile';
const ProfileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};
export default ProfileStack;
