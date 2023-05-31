import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

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
  title: {
    ...FONTS.Bold25,
    marginTop: 20,
    alignSelf: 'center',
  },
  emailInput: {
    paddingLeft: 15,
    marginTop: 40,
  },
  passwordInput: {
    marginTop: 15,
    paddingLeft: 10,
  },
  forgotBtn: {
    ...FONTS.Regular13,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  lineContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  line: {
    backgroundColor: COLORS.text_Input,
    height: 2,
    marginTop: 10,
    flex: 0.3,
  },
  orText: {
    color: COLORS.text_Input,
    ...FONTS.Regular10,
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
  },
  btnContainer:{
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  bottom:{
    alignSelf: 'center', flexDirection: 'row', bottom: 15
  },
  dontText:
    {color: COLORS.white, ...FONTS.Regular13},
    btn:{
      marginBottom: 10,
      marginLeft: 10,
    },
    signUpText:{
      color: COLORS.secondary, ...FONTS.Regular13
    }
  
});
