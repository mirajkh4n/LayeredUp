import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './authStack';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Drawer from './drawer';

const Routes = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <Drawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Routes;
