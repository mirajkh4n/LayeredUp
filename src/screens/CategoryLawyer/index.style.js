import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  title: {
    ...FONTS.Bold14,
  },
  container: {
    height: 146,
    width: 140,
    backgroundColor: '#F5F6FA',
    marginTop: SIZES.padding2,
  },
  profile: {
    height: 120,
    width: 140,
  },
});
