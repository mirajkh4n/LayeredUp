import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import CategoryLawyer from '../screens/CategoryLawyer';
import SubcategoryLawyer from '../screens/SubcategoryLawyer';
import Lawyer from '../screens/Lawyers';
import Explore from '../screens/Explore';
import Settings from '../screens/Settings';
import PrivacySettings from '../screens/PrivacySettings';
import TermsConditions from '../screens/TermsConditions';
import Forum from '../screens/Forum';
import ForumDetails from '../screens/ForumDetails';
import Forms from '../screens/Forms';
import QuestionarieForm from '../screens/QuestionarieForm';
import Clients from '../screens/Clients';
const DashBoardStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CategoryLawyer" component={CategoryLawyer} />
      <Stack.Screen name="SubcategoryLawyer" component={SubcategoryLawyer} />
      <Stack.Screen name="Lawyer" component={Lawyer} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PrivacySettings" component={PrivacySettings} />
      <Stack.Screen name="TermsConditions" component={TermsConditions} />
      <Stack.Screen name="Forum" component={Forum} />
      <Stack.Screen name="ForumDetails" component={ForumDetails} />
      <Stack.Screen name="Forms" component={Forms} />
      <Stack.Screen name="QuestionarieForm" component={QuestionarieForm} />
      <Stack.Screen name="Clients" component={Clients} />
    </Stack.Navigator>
  );
};
export default DashBoardStack;
