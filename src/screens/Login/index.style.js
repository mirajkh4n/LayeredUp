import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 300,
  },
  image_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    height: 54,
    width: 259,
    backgroundColor: '#E39F20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#F3F4F4',
    ...FONTS.SemiBold16,
  },
});
