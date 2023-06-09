import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    height: 186,
    paddingTop: SIZES.padding * 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:"center"
  },
  title: {
    ...FONTS.Regular20,
    color: COLORS.white,
    marginLeft: SIZES.padding2,
    textAlign: 'left',
    width: '85%',
  },
  topic: {
    bottom: 50,
    color: COLORS.white,
    ...FONTS.Regular18,
    marginHorizontal: 20,
  },
});
