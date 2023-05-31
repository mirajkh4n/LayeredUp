import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import {FONTS, SIZES} from '../../constants';
import InputFiled from '../../components/InputField';
import Header from '../../components/Header';

const ForgetPassword = ({navigation}) => {
  return (
    <ImageContainer>
      <Header onPressIcon={() => navigation.goBack()} />
      <View style={{justifyContent: 'center', flex: 1}}>
        <ImageBackground
          source={images.logoBackground}
          style={{
            height: 362,
            marginHorizontal: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
          }}>
          <Text
            text={'Forgot Password'}
            style={{
              ...FONTS.Regular25,
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
          <View style={{paddingHorizontal: 20, paddingTop: SIZES.padding}}>
            <InputFiled style={{}} placeholder={'Email ID'} />
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

const styles = StyleSheet.create({});
