import {StyleSheet} from 'react-native';
import { FONTS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding * 2,
  },
  title:{
    paddingTop:SIZES.padding*2,
    ...FONTS.Bold16
  },
  description:{
    ...FONTS.Regular13,
    paddingTop:SIZES.padding
  }
});
