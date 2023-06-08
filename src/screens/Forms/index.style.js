import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  title: {
    ...FONTS.Bold16,
  },
  container: {
    height: 120,
    justifyContent: 'space-between',
    backgroundColor: '#F5F6FA',
    marginTop: SIZES.padding,
    paddingLeft: SIZES.padding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    height: 80,
    width: 80,
  },
  btn: {
    height: 28,
    width: 100,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: '25%',
    width: '85%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  modalBtn: {
    height: 50,
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
