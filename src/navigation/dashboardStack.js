import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import CategoryLawyer from '../screens/CategoryLawyer';
import SubcategoryLawyer from '../screens/SubcategoryLawyer';
import Lawyer from '../screens/Lawyers';
import Explore from '../screens/Explore';
const DashBoardStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CategoryLawyer" component={CategoryLawyer} />
      <Stack.Screen name="SubcategoryLawyer" component={SubcategoryLawyer} />
      <Stack.Screen name="Lawyer" component={Lawyer} />
      <Stack.Screen name="Explore" component={Explore} />


    </Stack.Navigator>
  );
};
export default DashBoardStack;
