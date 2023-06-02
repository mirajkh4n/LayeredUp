import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Tabs from './Tab';

const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
    </Drawer.Navigator>
  );
};

export default Drawer;
