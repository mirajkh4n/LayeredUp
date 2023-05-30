import React, {useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {CustomButton, ImageContainer, Text} from '../../components';
import images from '../../constants/images';
import {COLORS, FONTS, SIZES} from '../../constants';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CELL_COUNT = 4;
const Otp = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ImageContainer customStyle={{justifyContent: 'center'}}>
      <ImageBackground
        source={images.logo_background}
        style={{height: 362, marginHorizontal: 10, paddingHorizontal: 10}}>
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
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
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
        <CustomButton
          text={'Submit'}
          onPress={() => navigation.navigate('SignUp')}
        />
      </ImageBackground>
    </ImageContainer>
  );
};

export default Otp;
const styles = StyleSheet.create({
  codeFieldRoot: {
    color: COLORS.text_color,
    marginTop: 40,
    padding: 20,
  },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 40,
    fontSize: 34,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 15,
    padding: 15,
    color: '#056721',
  },
  focusCell: {
    borderColor: '#4E4B66',
    color: COLORS.text_color,
  },
  title_details: {
    fontSize: 18,
    marginLeft: 20,
  },
});
