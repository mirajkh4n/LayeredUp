import React from 'react';
import {ImageBackground, View} from 'react-native';
import {CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import InputFiled from '../../components/InputField';
import Header from '../../components/Header';
import { styles } from './index.style';

const ChangePassword = ({navigation}) => {
  return (
    <ImageContainer>
      <Header onPressIcon={() => navigation.goBack()} />
      <View style={styles.mainView}>
        <ImageBackground
          source={images.logoBackground}
          style={styles.imageContainer}>
          <Text
            text={'Change Password'}
            style={styles.title}
          />
       
          <View style={styles.view}>
            <InputFiled  placeholder={'New Password'} />
            <InputFiled  placeholder={'Confirm Password'} />
            <CustomButton
              text={'Submit'}
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </ImageBackground>
      </View>
    </ImageContainer>
  );
};

export default ChangePassword;

