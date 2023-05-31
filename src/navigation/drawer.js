import React from 'react';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

export default Drawer;
