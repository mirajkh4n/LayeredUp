import React from 'react';
import {ImageBackground, View} from 'react-native';
import {CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import InputFiled from '../../components/InputField';
import Header from '../../components/Header';
import { styles } from './index.style';

const ForgetPassword = ({navigation}) => {
  return (
    <ImageContainer>
      <Header onPressIcon={() => navigation.goBack()} />
      <View style={styles.mainView}>
        <ImageBackground
          source={images.logoBackground}
          style={styles.imageContainer}>
          <Text
            text={'Forgot Password'}
            style={styles.title}
          />
          <Text
            text={
              'To reset password, enter your email address. A link will be shared to change your password.Forgot Password'
            }
            style={styles.description}
          />
          <View style={styles.view}>
            <InputFiled  placeholder={'Email ID'} />
            <CustomButton
              text={'Submit'}
              onPress={() => navigation.navigate('Otp')}
            />
          </View>
        </ImageBackground>
      </View>
    </ImageContainer>
  );
};

export default ForgetPassword;

