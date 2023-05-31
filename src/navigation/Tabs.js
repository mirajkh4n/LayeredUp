import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icons, Text } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import homestack_icon from "../assets/icons/homestack_icon";
import profile_stack_icon from "../assets/icons/profile_stack_icon";
import notification_stack_icon from "../assets/icons/notification_stack_icon";
import HomeStack from "./homeStack";
import ProfileStack from "./profileStack";
import NotificationStack from "./notificationStack";

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    id: "1",
    name: "HomeStack",
    component: HomeStack,
    activeIcon: homestack_icon,
    title: "Home",
  },
  {
    id: "2",
    name: "ProfileStack",
    component: ProfileStack,
    activeIcon: profile_stack_icon,
    title: "Profile",
  },
  {
    id: "3",
    name: "Notification",
    component: NotificationStack,
    activeIcon: notification_stack_icon,
    title: "Notification",
  },

];

const TabBarCustomButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.tab_bar_btn}
    >
      {children}
    </TouchableOpacity>
  );
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tab_bar,
      }}
    >
      {tabScreens.map((item, index) => (
        <Tab.Screen
          component={item.component}
          name={item.name}
          options={{
            tabBarIcon: () => {
              return (
                <View style={{ marginTop: SIZES.padding , justifyContent:"center" , alignItems:"center" }} key={item.id}>
                  <Icons
                    iconHeight={25}
                    style={{height:35}}
                    name={item.activeIcon}
                  />
                  <Text style={styles.tab_text} text={item.title} />
                </View>
              );
            },
            tabBarButton: (props) => <TabBarCustomButton {...props} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  tab_bar: {
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'#151E2F',
 
  },
  tab_bar_btn: {
    flex: 1,
    justifyContent: "center",
    width: 50,
    height: 60,
    alignItems: "center",
  },
  tab_text: {
    ...FONTS.Medium11,
    color: COLORS.white,
  },
});
