import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    height: 186,
    paddingTop: SIZES.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...FONTS.Regular20,
    color: COLORS.white,
    marginLeft: SIZES.padding2,
    textAlign: 'left',
    width: '85%',
  },
});
