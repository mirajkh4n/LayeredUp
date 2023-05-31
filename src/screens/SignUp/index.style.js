import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  background_Image: {
    height: 70,
    width: '63%',
    alignSelf: 'center',
    marginTop: 30,
  },
  check_box: {
 
    alignItems: 'flex-start',
  },
  privacy_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: SIZES.padding,
    marginLeft: SIZES.padding2,
  },
  privacy_text: {...FONTS.Regular13},
  privacy_link_text: {
    ...FONTS.Regular13,
    color: COLORS.secondary,
    textDecorationLine: 'underline',
  },
  bottom: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  dontText: {color: COLORS.text_Input, ...FONTS.Regular13},
  btn: {
    marginBottom: 10,
    marginLeft: 10,
  },
  signUpText: {
    color: COLORS.secondary,
    ...FONTS.Regular13,
  },
});
