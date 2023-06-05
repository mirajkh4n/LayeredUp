import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  title: {
    ...FONTS.Bold16,
  },
  container: {
    height: 73,
    justifyContent: 'space-between',
    backgroundColor: '#F5F6FA',
    marginTop: SIZES.padding2,
    paddingLeft: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: 50,
    width: 50,
  },
});
