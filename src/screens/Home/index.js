import React, {useContext} from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {Container, CustomButton, Icons, Text} from '../../components';
import {styles} from './index.style';
import images from '../../constants/images';
import drawer_icon from '../../assets/icons/drawer_icon';
import {COLORS, FONTS, SIZES} from '../../constants';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import search_icon from '../../assets/icons/search_icon';
import location_icon from '../../assets/icons/location_icon';
import {toplawyersData} from '../../constants/config';
const Home = ({navigation}) => {
  const lawyersData = [
    {
      id: 1,
      name: 'Mr. James Else',
      image: images.lawyer_image_home,
    },
    {
      id: 2,
      name: 'Mr. James Else',
      image: images.lawyer_image_home,
    },
    {
      id: 3,
      name: 'Mr. James Else',
      image: images.lawyer_image_home,
    },
    {
      id: 4,
      name: 'Mr. James Else',
      image: images.lawyer_image_home,
    },
    {
      id: 4,
      name: 'Mr. James Else',
      image: images.lawyer_image_home,
    },
    {
      id: 4,
      name: 'Mr. James Else',
      image: images.lawyer_image_home,
    },
  ];

  return (
    <Container customStyle={{backgroundColor: COLORS.white}}>
      <View style={styles.container}>
        <Image source={images.profiledp} style={styles.profile} />
        <View style={{paddingRight: 50}}>
          <Text
            text={'Jessica Seth'}
            style={{color: '#F3F4F4', ...FONTS.Bold22}}
          />
          <Text
            text={'jessca@user.com'}
            style={{color: '#F3F4F4', ...FONTS.Regular15}}
          />
        </View>
        <TouchableOpacity
          style={{paddingTop: SIZES.padding}}
          onPress={() => navigation.openDrawer()}>
          <Icons name={drawer_icon} />
        </TouchableOpacity>
      </View>
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
          placeholder="Explore Lawyers / Firms"></TextInput>
        <Icons name={search_icon} style={{paddingLeft: 15}} />
      </View>
      <ImageBackground
        source={images.logo_background}
        style={{backgroundColor: 'red', flex: 1}}>
        <Text
          text={'Recent Searched'}
          style={{
            ...FONTS.Bold16,
            paddingTop: SIZES.padding,
            paddingHorizontal: 20,
          }}
        />
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={lawyersData}
            renderItem={({item, ind}) => (
              <View
                style={{
                  marginHorizontal: 8,
                  height: 150,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#F5F6FA',
                    paddingHorizontal: 20,
                    // elevation: 4,
                    height: 80,
                    marginTop: 40,
                  }}>
                  <View style={{bottom: 40}}>
                    <Image
                      source={item.image}
                      style={{
                        height: 75,
                        width: 75,
                        borderWidth: 3,
                        borderColor: COLORS.secondary,
                        borderRadius: 100,
                      }}
                    />
                    <Text text={item.name} style={{paddingTop: 15}} />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#F5F6FA',
            width: '90%',
            alignSelf: 'center',
            height: 44,
            elevation: 4,
          }}>
          <TextInput
            style={{width: '85%', paddingLeft: 20}}
            placeholder="Location"></TextInput>
          <Icons name={location_icon} style={{paddingLeft: 15}} />
        </View>
        <Text
          text={'Top Lawyer'}
          style={{
            ...FONTS.Bold16,
            paddingTop: SIZES.padding,
            paddingHorizontal: 20,
          }}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={toplawyersData}
          renderItem={({item, ind}) => (
            <View
              style={{
                marginTop: 30,
                marginHorizontal: 20,
                height: 125,
                backgroundColor: '#F5F6FA',

                flexDirection: 'row',
                elevation: 2,
              }}>
              <Image
                source={item.image}
                style={{
                  marginLeft: 8,
                  height: 125,
                  width: 111,
                  borderColor: COLORS.secondary,
                }}
              />
              <View
                style={{
                  borderWidth: 2,
                  height: 125,
                  width: 111,
                  borderColor: COLORS.secondary,
                  position: 'absolute',
                  bottom: 8,
                }}></View>
              <View style={{width: '68%', marginHorizontal: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    text={item.name}
                    style={{
                      ...FONTS.Bold14,
                      marginRight: 10,
                    }}
                  />
                  <Text text={item.category} style={{marginTop: 5}} />
                </View>
                <Text
                  text={item.test}
                  style={{color: COLORS.secondary, ...FONTS.Medium11}}
                />
                <Text text={item.description} />
                <TouchableOpacity
                  onPress={() => navigation.navigate('Profile')}
                  style={{
                    height: 37,
                    width: 85,
                    backgroundColor: COLORS.secondary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    marginRight: 10,
                  }}>
                  <Text text={'View Profile'} style={{color: COLORS.white}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </ImageBackground>
    </Container>
  );
};
export default Home;
