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
    marginTop: SIZES.padding,
    paddingLeft: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: 120,
    width: 140,
  },
  check_box: {
    padding: 20,   
  },
});
