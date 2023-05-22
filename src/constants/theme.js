import {RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  primary: '#151E2F',
  black: '#000000',
  inputBackGround: '#DFE0EC',
};
export const FONTS = {
  Bold9: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h9),
  },
  Medium9: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h9),
  },
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 20,
  padding2: 12,

  // font sizes
  h9: 9,
  h10: 10,
};

const appThem = {COLORS, FONTS, SIZES};
export default appThem;
