import React, {useState} from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import {CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import {COLORS, FONTS, SIZES} from '../../constants';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Header from '../../components/Header';
import {styles} from './index.style';

const CELL_COUNT = 4;
const Otp = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ImageContainer>
      <Header isHome={true} onPressIcon={() => navigation.goBack()} />
      <View style={{justifyContent: 'center', flex: 1}}>
        <ImageBackground
          source={images.logo_background}
          style={{flex:0.7, marginHorizontal: 10, paddingHorizontal: 10}}>
          <Text
            text={'Enter Your Code'}
            style={{
              ...FONTS.Regular32,
              textAlign: 'center',
              paddingTop: SIZES.padding,
            }}
          />
          <Text
            text={'We have sent you a 4-digit code to'}
            style={{
              ...FONTS.Regular15,
              textAlign: 'center',
              paddingTop: SIZES.padding,
            }}
          />
          <Text
            text={'12345678'}
            style={{
              ...FONTS.Regular15,
              textAlign: 'center',
              color: '#E39F20',
            }}
          />
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <TouchableOpacity>
            <Text
              text={'Resend Code'}
              style={styles.resendCodeText}
            />
          </TouchableOpacity>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
            <Text
              text={'OR'}
              style={[styles.orText]}
            />
            <View style={styles.line}></View>
          </View>
          <TouchableOpacity>
            <Text
              text={'Call me'}
              style={styles.resendCodeText}
            />
          </TouchableOpacity>
          <CustomButton
            text={'Submit'}
            onPress={() => navigation.navigate('SignIn')}
          />
        </ImageBackground>
      </View>
    </ImageContainer>
  );
};

export default Otp;
