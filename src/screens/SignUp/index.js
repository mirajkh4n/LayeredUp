import React, {useState, useContext} from 'react';
import {ImageBackground, View, TouchableOpacity} from 'react-native';
import {Container, CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import {COLORS, FONTS, SIZES} from '../../constants';
import InputFiled from '../../components/InputField';
import CheckBox from 'react-native-check-box';
import {styles} from './index.style';
import {AuthContext} from '../../navigation/AuthProvider';

const SignUp = ({navigation}) => {
  const [isCheck, setIsCheck] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {register} = useContext(AuthContext);
  return (
    <ImageContainer customStyle={{justifyContent: 'center'}}>
      <Container
        scroll={true}
        customStyle={{flex: 0.75, justifyContent: 'center'}}>
        <ImageBackground
          source={images.logo_background}
          style={{flex: 0.8, marginHorizontal: 10, paddingHorizontal: 10}}>
          <Text
            text={'Sign Up'}
            style={{
              ...FONTS.Regular25,
              textAlign: 'center',
              paddingTop: SIZES.padding,
            }}
          />
          <Text
            text={'Lawyer'}
            style={{
              ...FONTS.Regular25,
              textAlign: 'center',
              paddingTop: SIZES.padding2,
              color: COLORS.secondary,
            }}
          />
          <View style={{marginHorizontal: 10}}>
            <InputFiled style={{}} placeholder={'Name'} />
            <InputFiled
              style={{}}
              placeholder={'Email'}
              value={email}
              onChangeText={userEmail => setEmail(userEmail)}
            />
            <InputFiled style={{}} placeholder={'Phone Number'} />
            <InputFiled
              style={{}}
              placeholder={'Enter Password'}
              value={password}
              onChangeText={userPassword => setPassword(userPassword)}
            />
            <InputFiled style={{}} placeholder={'Confirm Password'} />
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
                style={{color: COLORS.text_color, ...FONTS.Regular13}}
              />
              <Text
                text={'Terms and conditions!'}
                style={{color: COLORS.secondary, ...FONTS.Regular13}}
              />
            </View>
          </View>
          <CustomButton
            text={'Next'}
            onPress={() => register(email, password)}
          />
        </ImageBackground>
      </Container>
    </ImageContainer>
  );
};

export default SignUp;
