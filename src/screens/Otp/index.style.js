import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

export const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    flex: 0.2,
    alignItems: 'center',
    alignSelf: 'center',
  },
  line: {
    backgroundColor: COLORS.text_Input,
    height: 2,
   width:100
  },
  orText: {
    color: COLORS.black,
    ...FONTS.Regular10,
    marginRight: 10,
    marginLeft: 10,
  },

  resendCodeText: {
    color: COLORS.secondary,
    ...FONTS.Regular13,
    textAlign: 'center',
  },
  codeFieldRoot: {
    color: COLORS.text_color,
    marginTop: 10,
    padding: 20,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 40,
    fontSize: 34,
    textAlign: 'center',
    padding: 10,
    backgroundColor:COLORS.text_Input
  },
  focusCell: {
    borderColor: '#4E4B66',
    color: COLORS.text_color,
  },
  title_details: {
    fontSize: 18,
    marginLeft: 20,
  },
});
