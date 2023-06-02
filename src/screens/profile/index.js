import {View, Text} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';

const Profile = () => {
  return (
    <View>
      <MainHeader title={'Profile'} showRightIcon={true} isSearchbar={true} />
    </View>
  );
};

export default Profile;
