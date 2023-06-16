import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import {FlatList} from 'react-native-gesture-handler';
import images from '../../constants/images';
import CustomText from '../../components/Text';
import {COLORS, FONTS} from '../../constants';
import time_icon from '../../assets/icons/time_icon';

const Notifications = ({navigation}) => {
  const notificationData = [
    {
      id: 1,
      image: images.profiledp,
      title: 'James Else has download the form',
      timeIcon: time_icon,
      time: '08:01 PM',
      status: true,
      type: 'Accept',
    },
    {
      id: 2,
      image: images.profiledp,
      title: 'James Else has download the form',
      timeIcon: time_icon,
      time: '08:01 PM',
      status: true,
      type: 'Ignore',
    },
    {
      id: 3,
      image: images.profiledp,
      title: 'James Else has download the form',
      timeIcon: time_icon,
      time: '08:01 PM',
      status: true,
      type: 'Preview',
    },
    {
      id: 4,
      image: images.profiledp,
      title: 'James Else has download the form',
      timeIcon: time_icon,
      time: '08:01 PM',
      status: true,
      type: 'Open',
    },
    {
      id: 5,
      image: images.profiledp,
      title: 'James Else has download the form',
      timeIcon: time_icon,
      time: '08:01 PM',
      status: true,
      type: 'ViewProfile',
    },
    {
      id: 5,
      image: images.profiledp,
      title: 'James Else has download the form',
      timeIcon: time_icon,
      time: '08:01 PM',
      status: true,
      type: 'Clear',
    },
  ];

  return (
    <Container>
      <MainHeader
        title={'Notifications'}
        showRightIcon={true}
        onPressNotification={() => navigation.openDrawer()}
      />
      <FlatList
        ListHeaderComponent={() => <Text>Today</Text>}
        showsHorizontalScrollIndicator={false}
        data={notificationData}
        renderItem={({item, ind}) => (
          <View style={{paddingHorizontal: 20, paddingTop: 15}}>
            <View style={{height: 90, backgroundColor: COLORS.backgroundColor}}>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Image
                  source={item.image}
                  style={{height: 50, width: 50, marginHorizontal: 10}}
                />
                <CustomText
                  text={item.title}
                  style={{...FONTS.Bold14, paddingTop: 10}}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  paddingRight: 20,
                }}>
                <Icons name={item.timeIcon} />
                <Text text={item.time} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-end',
                bottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.secondary,
                  height: 30,
                  marginRight: 10,
                  width: 110,
                  justifyContent: 'center',
                }}>
                <Text
                  text={item.type === 'Accept' ? 'Accept' : 'Open'}
                  style={{color: COLORS.white, alignSelf: 'center'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.primary,
                  height: 30,
                  marginRight: 10,
                  width: 110,
                  justifyContent: 'center',
                }}>
                <Text
                  text={item.type === 'Ignore' ? 'Ignore' : 'Preview'}
                  style={{color: COLORS.white, alignSelf: 'center'}}
                />
              </TouchableOpacity>

              {item.type === 'Clear' && (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#8B9AB7',
                    height: 30,
                    marginRight: 10,
                    width: 110,
                    justifyContent: 'center',
                  }}>
                  <Text
                    text={'Clear'}
                    style={{
                      color: COLORS.white,
                      alignSelf: 'center',
                    }}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </Container>
  );
};

export default Notifications;
