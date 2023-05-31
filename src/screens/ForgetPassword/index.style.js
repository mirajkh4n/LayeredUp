import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'center',
    flex: 1,
  },
  imageContainer: {
    height: 362,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  title: {
    ...FONTS.Regular25,
    textAlign: 'center',
    paddingTop: SIZES.padding,
  },
  description: {
    ...FONTS.Regular15,
    textAlign: 'center',
    paddingTop: SIZES.padding,
  },
  view: {
    paddingHorizontal: 20,
    paddingTop: SIZES.padding,
  },
});
