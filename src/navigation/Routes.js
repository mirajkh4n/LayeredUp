import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Drawer from './drawer';
import Tabs from './Tab';
import {createStackNavigator} from '@react-navigation/stack';

const Routes = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  const Stack = createStackNavigator();
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;

  return (
    <NavigationContainer>
      {/* {user ? <Drawer /> : <AuthStack />} */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="Tabs" component={Drawer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
