import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  title: {
    ...FONTS.Regular20,
  },
  container: {
    
    height: 135,
    width: 150,
    backgroundColor: '#F5F6FA',
    marginTop: SIZES.padding,
    borderWidth:1,
    borderColor:COLORS.secondary,
    alignItems:"center",
    justifyContent:'center'
  },
  profile: {
    height: 120,
    width: 140,
  },
});
