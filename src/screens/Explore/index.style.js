import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  title: {
    ...FONTS.Regular15,
  },
  container: {
    height: 135,
    width: 150,
    backgroundColor: '#F5F6FA',
    marginTop: SIZES.padding,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    height: 120,
    width: 140,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: COLORS.primary,
    opacity: 0.9,
  },
  modalView: {
    height: '35%',
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
