import {StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomText from '../Text';
import {COLORS, FONTS, SIZES} from '../../constants';

const CustomButton = ({text, style, customstyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, customstyle, {marginTop: SIZES.padding * 2}]}>
      <CustomText text={text} style={[styles.btnText, style]} />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    height: 45,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#F3F4F4',
    ...FONTS.SemiBold16,
  },
});
