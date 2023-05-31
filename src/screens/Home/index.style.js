import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 186,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    paddingTop: SIZES.padding * 2,
  },
  profile: {
    height: 65,
    width: 65,
    marginHorizontal: SIZES.padding,
  },
});
