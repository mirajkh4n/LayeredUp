import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../constants';

export const styles = StyleSheet.create({
  main_container: {
    marginHorizontal: 20,
  },
  topic_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topic_txt: {
    ...FONTS.Bold14,
  },
  seeAll_txt: {
    ...FONTS.Bold11,
    color: COLORS.secondary,
    alignSelf: 'flex-end',
  },
  list_mainView: {
    height: 100,
    paddingTop: 20,
  },
  list_container: {
    flexDirection: 'row',
  },
  topic_avatar: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  minus_icon_view: {
    width: '40%',
    alignSelf: 'flex-end',
  },
  minus_icon: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    bottom: 8,
  },
  topic: {
    alignSelf: 'center',
    marginLeft: 10,
    ...FONTS.Bold16,
  },
});
