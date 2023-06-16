import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

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
  header_main_view: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SIZES.padding * 3,
  },
  all_header_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title_view: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title_text: {
    color: COLORS.black,
    ...FONTS.Bold14,
    marginLeft: 8,
  },
  high_text: {
    color: COLORS.white,
    ...FONTS.Regular11,
    marginRight: 8,
  },
  high_view: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: COLORS.secondary,
    height: 35,
    width: 80,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count_view: {
    backgroundColor: COLORS.secondary,
    borderRadius: 150,
    height: 25,
    width: 25,
    alignItems: 'center',
    marginLeft: 20,
  },
});
