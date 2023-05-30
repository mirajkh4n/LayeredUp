import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTS} from '../../constants';

const CustomText = ({style, text, numberOfLines}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    ...FONTS.Regular10,
    color: COLORS.text_color,
  },
});

export default CustomText;
