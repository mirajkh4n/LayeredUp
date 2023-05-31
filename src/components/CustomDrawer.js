import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext} from 'react';
import {COLORS} from '../constants';
import images from '../constants/images';
import {CodeField} from 'react-native-confirmation-code-field';
import Container from './container';

export default function CustomDrawer(props) {
  //   const logOut = () => {
  //     AsyncStorage.clear();
  //   };
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
      goto: () => props.navigation.navigate('ManageServices'),
    },
    {
      title: 'Clients Forum',
      icon: images.Forum,
      goto: () => props.navigation.navigate('ClientsForum'),
    },
    {
      title: 'Lawyer Guild',
      icon: images.law,
      goto: () => props.navigation.navigate('LawyerGuild'),
    },
    {
      title: 'Meetings',
      icon: images.chat,
      goto: () => props.navigation.navigate('Meetings'),
    },
    {
      title: 'Forum',
      icon: images.files,
      goto: () => props.navigation.navigate('Forum'),
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
      <View style={{flex: 0.2, backgroundColor: '#151E2F'}}>
        {/* <View style={{alignSelf: 'flex-end'}}></View> */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={images.login_logo}
            style={{height: 70, width: 70, marginTop: 20, marginLeft: 20}}
          />
          <View style={{}}>
            <View>
              <Text
                style={{
                  alignSelf: 'center',
                  marginLeft: 10,
                  fontSize: 25,
                  color: COLORS.black,
                }}>
                ........
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: COLORS.black, fontSize: 8}}>.....</Text>
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
      <View style={{height: 100, backgroundColor: COLORS.primary}}></View>
    </View>
  );
}

const styles = StyleSheet.create({});
