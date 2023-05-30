import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export const COLORS = {
  primary: '#C50077',
  secondary: '#E39F20',
  white: '#FFFFFF',
  black: '#000000',
  text_Input: '#DFE0EC',
  text_color: '#151E2F',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius_sm: 4,
  radius: 30,
  padding: 20,
  padding2: 12,

  // font sizes
  h9: 9,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h32: 32,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  // Regular
  Regular10: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h10),
  },
  Regular13: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular15: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h15),
  },
  Regular18: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h18),
  },
  Regular25: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h25),
  },
  Regular32: {
    fontFamily: 'Inter-Regular',
    fontSize: RFValue(SIZES.h32),
  },

  // Medium
  Medium11: {
    fontFamily: 'Inter-Medium',
    fontSize: RFValue(SIZES.h11),
  },

  //SemiBold
  SemiBold12: {
    fontFamily: 'Inter-SemiBold',
    fontSize: RFValue(SIZES.h12),
  },
  SemiBold16: {
    fontFamily: 'Inter-SemiBold',
    fontSize: RFValue(SIZES.h16),
  },

  //Bold
  Bold16: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h16),
  },
  Bold18: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h18),
  },
  Bold25: {
    fontFamily: 'Inter-Bold',
    fontSize: RFValue(SIZES.h25),
  },

  // light
  light15: {
    fontFamily: 'Inter-Light',
    fontSize: RFValue(SIZES.h15),
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
