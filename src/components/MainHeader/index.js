import {Image, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import images from '../../constants/images';
import {Icons, Text} from '../index';
import {styles} from './index.style';
import drawer_icon from '../../assets/icons/drawer_icon';
import backIcon_white from '../../assets/icons/backIcon_white';
import search_icon from '../../assets/icons/search_icon';
import {TextInput} from 'react-native-gesture-handler';

const MainHeader = ({
  title,
  onPressIcon,
  onPressSearch,
  onPressFilter,
  isHome = false,
  showNoIcons = false,
  isProfile = false,
  showRightIcon = true,
  onPressNotification,
  isSearchbar = false,
}) => {
  return (
    <>
      <View>
        <View style={styles.main_view}>
          {showNoIcons ? (
            <View />
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: 30,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: SIZES.padding * 2,
              }}
              onPress={onPressIcon}>
              <Icons name={backIcon_white} />
            </TouchableOpacity>
          )}
          <View style={{flex: 1, alignItems: isHome ? 'center' : 'flex-start'}}>
            {isHome ? (
              <Image
                source={images.logo_withWhite_text}
                resizeMode="contain"
                style={{height: 100   , width: 200}}
              />
            ) : (
              <Text numberOfLines={1} style={styles.title} text={title} />
            )}
          </View>

          {isProfile ? (
            <TouchableOpacity activeOpacity={0.7} onPress={onPressSearch}>
              {/* <Icons name={edit_profile_icon} /> */}
            </TouchableOpacity>
          ) : (
            <>
              {showRightIcon ? (
                <View
                  style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
                  <TouchableOpacity
                    onPress={onPressNotification}
                    style={{
                      marginLeft: SIZES.padding2,
                      marginRight: SIZES.padding2,
                    }}>
                    <Icons name={drawer_icon} />
                  </TouchableOpacity>

                  {isHome && (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        marginLeft: SIZES.padding2,
                        marginRight: SIZES.padding2 * 0.5,
                      }}
                      onPress={onPressFilter}>
                      {/* <Icons name={settings_icon} /> */}
                    </TouchableOpacity>
                  )}
                </View>
              ) : (
                <></>
              )}
            </>
          )}
        </View>
        {isSearchbar && (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: COLORS.text_Input,
              width: '90%',
              alignSelf: 'center',
              height: 44,
              bottom: 20,
            }}>
            <TextInput
              style={{width: '85%', paddingLeft: 20}}
              placeholder="Explore Categories"></TextInput>
            <Icons name={search_icon} style={{paddingLeft: 15}} />
          </View>
        )}
      </View>
    </>
  );
};
export default MainHeader;
