import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {CustomButton} from '../../components';
import {AuthContext} from '../../navigation/AuthProvider';

const Home = () => {
  const {logout, user} = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <CustomButton onPress={() => logout()} text={'Logout'} />
    </View>
  );
};

export default Home;
