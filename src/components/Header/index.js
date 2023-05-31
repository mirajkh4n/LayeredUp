import { Image, TouchableOpacity, View } from "react-native";
import { SIZES } from "../../constants";
import images from "../../constants/images";
import { Icons, Text } from "../index";
import { styles } from "./index.style";
import backIcon from "../../assets/icons/backicon";


const Header = ({
  title,
  onPressIcon,
  isDrawer = false,
  onPressSearch,
  onPressFilter,
  isHome = false,
  showNoIcons = false,
  isProfile = false,
  showRightIcon = true,
  onPressNotification,
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
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal:SIZES.padding*2
                
              }}
              onPress={onPressIcon}
            >
           {
            isDrawer ? <Icons name={menuicon} /> :
            <Icons name={backIcon} />
           }   
            </TouchableOpacity>
          )}
          <View
            style={{ flex: 1, alignItems: isHome ? "center" : "flex-start", }}
          >
            {isHome ? (
              <Image
              source={images.logo_withWhite_text}
                resizeMode="contain"
                style={{ height: 100,width:200 }}
               
              />
            ) : (
              <Text numberOfLines={1} style={styles.title} text={title} />
            )}
          </View>

          {isProfile ? (
            <TouchableOpacity 
            activeOpacity={0.7}
            onPress={onPressSearch}>
              {/* <Icons name={edit_profile_icon} /> */}
            </TouchableOpacity>
          ) : (
            <>
              {showRightIcon ? (
                <View style={{ flexDirection: "row",paddingTop:SIZES.padding2 }}>
                   <TouchableOpacity
                    onPress={onPressNotification}
                    style={{
                      marginLeft: SIZES.padding2,
                      marginRight: SIZES.padding2 ,
                    }}
                  >
                    {/* <Icons name={notificationIcon} /> */}
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginTop: SIZES.padding2 * 0.3 }}
                    onPress={onPressSearch}
                  >
                    {/* <Icons name={rigticon} /> */}
                  </TouchableOpacity>
                 
                  {isHome && (
                    <TouchableOpacity
                    activeOpacity={0.7}
                      style={{ marginLeft: SIZES.padding2  ,
                        marginRight: SIZES.padding2 * 0.5,
                      }}
                      onPress={onPressFilter}
                    >
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
      </View>
    </>
  );
};
export default Header;
