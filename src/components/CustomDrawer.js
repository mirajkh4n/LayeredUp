import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {COLORS, FONTS} from '../constants';
import images from '../constants/images';
import {AuthContext} from '../navigation/AuthProvider';
import edit_profileIcon from '../assets/icons/edit_profile-icon';

export default function CustomDrawer(props) {
  const {logout, user} = useContext(AuthContext);
  const arr = [
    {
      title: 'Home',
      icon: images.Home_icon,
      goto: () => props.navigation.navigate('Home'),
    },
    {
      title: 'Profile',
      icon: images.profile,
      goto: () => props.navigation.navigate('Profile'),
    },
    {
      title: 'Manage Services',
      icon: images.service,
      goto: () => props.navigation.navigate('CategoryLawyer'),
    },
    {
      title: 'Clients Forum',
      icon: images.Forum,
      goto: () => props.navigation.navigate('SubcategoryLawyer'),
    },
    {
      title: 'Lawyer Guild',
      icon: images.law,
      goto: () => props.navigation.navigate('Lawyer'),
    },
    {
      title: 'Meetings',
      icon: images.chat,
      goto: () => props.navigation.navigate('Explore'),
    },
    {
      title: 'Forum',
      icon: images.files,
      goto: () => props.navigation.navigate('Forms'),
    },
    {
      title: 'Notification',
      icon: images.bell,
      goto: () => props.navigation.navigate('Notification'),
    },
    {
      title: 'Schedule',
      icon: images.Video_Icon,
      goto: () => props.navigation.navigate('Schedule'),
    },
    {
      title: 'My Subscriptions',
      icon: images.Subscriptions,
      goto: () => props.navigation.navigate('My Subscriptions'),
    },
    {
      title: 'Explore',
      icon: images.search,
      goto: () => props.navigation.navigate('Explore'),
    },
    {
      title: 'Payment History',
      icon: images.Payment,
      goto: () => props.navigation.navigate('Payment History'),
    },
    {
      title: 'Settings',
      // icon: images.,
      goto: () => props.navigation.navigate('Settings'),
    },
    // {
    //   title: 'Logout',
    //   goto: () => {
    //     logOut();
    //   },
    // },
  ];

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
      }}>
      <View style={{flex: 0.2, backgroundColor: '#151E2F', paddingTop: 15}}>
        {/* <View style={{alignSelf: 'flex-end'}}></View> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={images.lawyer_profile}
            style={{height: 70, width: 70, marginTop: 20, marginLeft: 20}}
          />
          <View style={{}}>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  marginLeft: 10,
                  ...FONTS.Regular15,
                  color: COLORS.white,
                }}>
                Jessica Seth
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.Regular10,
                  marginLeft: 10,
                }}>
                jess@email.com
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView style={{flex: 0.7}}>
        {arr.map((ele, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index.toString()}
              onPress={ele.goto}>
              <View
                style={{
                  padding: 5,
                  margin: 10,
                  marginLeft: 10,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  source={ele.icon}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                  }}
                />
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{
                      color: COLORS.black,
                      fontSize: 18,
                    }}>
                    {ele.title}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{height: 45}}>
        <TouchableOpacity
          onPress={() => logout()}
          text={'Logout'}
          style={{flexDirection: 'row', alignContent: 'flex-start'}}>
          <Image
            source={images.logout_image_icon}
            style={{height: 45, width: 45, resizeMode: 'contain'}}
          />
          <Text style={{color: 'red', marginLeft: 10}}>Logout</Text>
        </TouchableOpacity>
        {/* <CustomButton onPress={() => logout()} text={'Logout'} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
