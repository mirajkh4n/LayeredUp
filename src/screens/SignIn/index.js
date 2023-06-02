import React, {useContext, useState} from 'react';
import {Image, View,TouchableOpacity} from 'react-native';
import {Container, CustomButton, ImageContainer} from '../../components';
import CustomText from '../../components/Text';
import images from '../../constants/images';
import {styles} from './index.style';
import IconInputField from '../../components/PasswordInput';
import password_icon from '../../assets/icons/password_icon';
import {AuthContext} from '../../navigation/AuthProvider';
import Header from '../../components/Header';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);
  return (
    <ImageContainer onBoarding_background={true}>
      <Container scroll={true}>
        <Header
          title={'Back to Main Screen'}
          onPressIcon={() => navigation.goBack()}
        />
        <Image
          source={images.logo_withWhite_text}
          style={styles.background_Image}
          resizeMode="contain"
        />
        <View style={{paddingHorizontal: 20, flex: 1}}>
          <View style={styles.container}>
            <View style={styles.inner_view}>
              <CustomText text={'Sign In'} style={styles.title} />
              <IconInputField
                placeholder={'phtuonganh@gmail.com'}
                value={email}
                onChangeText={userEmail => setEmail(userEmail)}
                style={styles.emailInput}
              />
              <IconInputField
                rightIcon={password_icon}
                placeholder={'Enter Password'}
                value={password}
                onChangeText={userPassword => setPassword(userPassword)}
                style={styles.passwordInput}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('ForgetPassword')}>
                <CustomText
                  text={'Forgot your password?'}
                  style={styles.forgotBtn}
                />
              </TouchableOpacity>
              <CustomButton
                text={'Sign In'}
                onPress={() => login(email, password)}
              />
              <View style={styles.lineContainer}>
                <View style={styles.line}></View>
                <CustomText text={'Or'} style={styles.orText} />
                <View style={styles.line}></View>
              </View>
              <View style={styles.btnContainer}>
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
        <View style={styles.bottom}>
          <CustomText text={'Don’t have account?'} style={styles.dontText} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={styles.btn}>
            <CustomText text={'Sign Up'} style={styles.signUpText} />
          </TouchableOpacity>
        </View>
      </Container>
    </ImageContainer>
  );
};

export default SignIn;
