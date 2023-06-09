import React, {useState, useContext} from 'react';
import {ImageBackground, View, TouchableOpacity} from 'react-native';
import {Container, CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import {COLORS, FONTS, SIZES} from '../../constants';
import CheckBox from 'react-native-check-box';
import {styles} from './index.style';
import {AuthContext} from '../../navigation/AuthProvider';
import Header from '../../components/Header';
import IconInputField from '../../components/PasswordInput';
import password_icon from '../../assets/icons/password_icon';

const SignUp = ({navigation}) => {
  const [isCheck, setIsCheck] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {register} = useContext(AuthContext);
  return (
    <ImageContainer customStyle={{justifyContent: 'center'}}>
      <Container scroll={true}>
        <Header isHome={true} onPressIcon={() => navigation.goBack()} />
        <View style={{justifyContent: 'center', flex: 0.3}}>
          <ImageBackground
            source={images.logo_background}
            style={{flex: 0.5, marginHorizontal: 10, paddingHorizontal: 10}}>
            <Text
              text={'Sign Up'}
              style={{
                ...FONTS.Regular25,
                textAlign: 'center',
                paddingTop: SIZES.padding * 2,
              }}
            />

            <Text
              text={'Lawyer'}
              style={{
                ...FONTS.Regular25,
                textAlign: 'center',
                paddingTop: SIZES.padding,
                color: COLORS.secondary,
              }}
            />
            <View style={{marginHorizontal: 20}}>
              <IconInputField style={{}} placeholder={'Name'} />
              <IconInputField
                placeholder={'Email'}
                value={email}
                onChangeText={userEmail => setEmail(userEmail)}
              />
              <IconInputField style={{}} placeholder={'Phone Number'} />
              <IconInputField
                  rightIcon={password_icon}
                placeholder={'Enter Password'}
                value={password}
                onChangeText={userPassword => setPassword(userPassword)}
              />
              <IconInputField  rightIcon={password_icon} placeholder={'Confirm Password'} />
              <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
                <CheckBox
                
                  isChecked={isCheck}
                  style={styles.check_box}
                  onClick={() => setIsCheck(!isCheck)}
                  checkedCheckBoxColor={COLORS.secondary}
                  uncheckedCheckBoxColor={COLORS.secondary}
                />
                <Text
                  text={'I accept all of the  '}
                  style={{color: COLORS.text_color, ...FONTS.Regular11}}
                />
                <Text
                  text={'Terms and conditions!'}
                  style={{color: COLORS.secondary, ...FONTS.Regular11}}
                />
              </View>
            </View>
            <View style={{bottom: 15,marginHorizontal: 20}}>
              <CustomButton
                text={'Next'}
                onPress={() => register(email, password)}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.bottom}>
          <Text text={' Already Have an account?'} style={styles.dontText} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            style={styles.btn}>
            <Text text={'Sign In'} style={styles.signUpText} />
          </TouchableOpacity>
        </View>
      </Container>
    </ImageContainer>
  );
};

export default SignUp;
