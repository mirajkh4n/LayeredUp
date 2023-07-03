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
import LawyerUnverifiedProfile from '../screens/lawyerUnverified';
import LawyerVerifiedProfile from '../screens/lawyerVarified';
import Subscription from '../screens/subscription';
import QuestionarieCreateForm from '../screens/QuestionarieCreateForm';
import Chat from '../screens/Chat';
import Profile from '../screens/profile';
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
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="QuestionarieForm" component={QuestionarieForm} />
      <Stack.Screen name="Clients" component={Clients} />
      <Stack.Screen
        name="LawyerVerifiedProfile"
        component={LawyerVerifiedProfile}
      />
      <Stack.Screen
        name="LawyerUnverifiedProfile"
        component={LawyerUnverifiedProfile}
      />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen
        name="QuestionarieCreateForm"
        component={QuestionarieCreateForm}
      />
    </Stack.Navigator>
  );
};
export default DashBoardStack;
