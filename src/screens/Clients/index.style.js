import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
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
      title: {
        ...FONTS.Bold16,
      },
      btn: {
        height: 35,
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
        flex:0.7,
        width: '95%',
        backgroundColor: 'white',
      },
      modalBtn: {
        height: 50,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
      },
});
