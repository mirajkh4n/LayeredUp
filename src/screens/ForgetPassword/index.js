import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import {FONTS, SIZES} from '../../constants';
import InputFiled from '../../components/InputField';

const ForgetPassword = ({navigation}) => {
  return (
    <ImageContainer customStyle={{justifyContent: 'center'}}>
      <ImageBackground
        source={images.logoBackground}
        style={{height: 362, marginHorizontal: 10, paddingHorizontal: 10}}>
        <Text
          text={'Forgot Password'}
          style={{
            ...FONTS.Regular32,
            textAlign: 'center',
            paddingTop: SIZES.padding,
          }}
        />
        <Text
          text={
            'To reset password, enter your email address. A link will be shared to change your password.Forgot Password'
          }
          style={{
            ...FONTS.Regular15,
            textAlign: 'center',
            paddingTop: SIZES.padding,
          }}
        />
        <InputFiled style={{}} placeholder={'Email ID'} />
        <CustomButton
          text={'Submit'}
          onPress={() => navigation.navigate('Otp')}
        />
      </ImageBackground>
    </ImageContainer>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
