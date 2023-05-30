import {StyleSheet, Image, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {Container, CustomButton, Icons, ImageContainer} from '../../components';
import CustomText from '../../components/Text';
import images from '../../constants/images';
import {COLORS, FONTS, SIZES} from '../../constants';
import {styles} from './index.style';
import InputFiled from '../../components/InputField';
import IconInputField from '../../components/PasswordInput';
import password_icon from '../../assets/icons/password_icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../navigation/AuthProvider';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);
  return (
    <ImageContainer onBoarding_background={true}>
      <CustomText
        text={'Back to main Screen'}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          ...FONTS.Regular18,
          color: COLORS.white,
          paddingTop: 35,
        }}
      />
      <Container scroll={true}>
        <Image
          source={images.logo_withWhite_text}
          style={styles.background_Image}
          resizeMode="contain"
        />
        <View style={{paddingHorizontal: 20, flex: 1}}>
          <View style={styles.container}>
            <View style={styles.inner_view}>
              <CustomText
                text={'Sign In'}
                style={{...FONTS.Bold25, marginTop: 20}}
              />
              <InputFiled
                placeholder={'phtuonganh@gmail.com'}
                value={email}
                onChangeText={userEmail => setEmail(userEmail)}
                style={{paddingLeft: 15}}
              />
              <IconInputField
                rightIcon={password_icon}
                placeholder={'*******'}
                value={password}
                onChangeText={userPassword => setPassword(userPassword)}
                style={{marginTop: 15, paddingLeft: 10}}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPassword')}>
                <CustomText
                  text={'Forgot your password?'}
                  style={{
                    ...FONTS.Regular10,
                    marginTop: 10,
                    alignSelf: 'flex-end',
                  }}
                />
              </TouchableOpacity>
              <CustomButton
                text={'Sign In'}
                onPress={() => login(email, password)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: COLORS.text_Input,
                    height: 2,
                    marginTop: 10,
                    flex: 0.3,
                  }}></View>
                <CustomText
                  text={'Or'}
                  style={{
                    color: COLORS.text_Input,
                    ...FONTS.Regular10,
                    marginTop: 8,
                    marginRight: 10,
                    marginLeft: 10,
                  }}
                />
                <View
                  style={{
                    backgroundColor: COLORS.text_Input,
                    height: 2,
                    marginTop: 10,
                    flex: 0.3,
                  }}></View>
              </View>
              <View
                style={{
                  height: 90,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <TouchableOpacity>
                  <Image
                    source={images.facebook}
                    resizeMode="contain"
                    style={{width: 80}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={images.google}
                    resizeMode="contain"
                    style={{width: 80}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={images.linkedIn}
                    resizeMode="contain"
                    style={{width: 80}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{alignSelf: 'center', flexDirection: 'row', bottom: 15}}>
          <CustomText
            text={'Don’t have account?'}
            style={{color: COLORS.white, ...FONTS.Regular13}}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={{
              marginBottom: 10,
              marginLeft: 10,
            }}>
            <CustomText
              text={'Sign Up'}
              style={{color: COLORS.secondary, ...FONTS.Regular13}}
            />
          </TouchableOpacity>
        </View>
      </Container>
    </ImageContainer>
  );
};

export default SignIn;
