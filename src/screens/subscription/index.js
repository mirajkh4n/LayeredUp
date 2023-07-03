import {View, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import {Container, CustomButton, Icons} from '../../components';
import images from '../../constants/images';
import {COLORS, FONTS} from '../../constants';
import CustomText from '../../components/Text';
import play_now_icon from '../../assets/icons/play_now_icon';

const Subscription = () => {
  return (
    <View style={{flex: 1}}>
      <MainHeader
        style={{backgroundColor: COLORS.white}}
        title={'Subscription'}
        isSearchbar={true}
        placeholder={'Explore Attorneys'}
      />
      <ImageBackground
        resizeMode="cover"
        source={images.subscription_background}
        style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
          }}>
          <CustomText
            text={'Middle Plan'}
            style={{
              color: COLORS.secondary,
              ...FONTS.Bold18,
            }}
          />
        </View>
        <View style={{height: 60}}>
          <CustomText
            text={'$49.22'}
            style={{
              color: COLORS.secondary,
              ...FONTS.Bold30,
              marginTop: 20,
            }}
          />
        </View>
        <View
          style={{
            height: '52%',
            backgroundColor: COLORS.white,
            width: '60%',
            top: 20,
            alignItems: 'center',
          }}>
          <CustomText
            text={'3 Case'}
            style={{...FONTS.Bold14, marginTop: 10}}
          />
          <CustomText
            text={'5 lawyers'}
            style={{...FONTS.Bold14, marginTop: 10}}
          />
          <CustomText
            text={'2 Law Firms'}
            style={{...FONTS.Bold14, marginTop: 10}}
          />
          <CustomText
            text={'Simple Plan'}
            style={{...FONTS.Bold14, marginTop: 10}}
          />
          <CustomText
            text={'8 Lorm Ipsum'}
            style={{...FONTS.Bold14, marginTop: 10}}
          />
          <CustomText
            text={'9 Dolor Amit'}
            style={{...FONTS.Bold14, marginTop: 10}}
          />
          <CustomText
            text={'5 Amendmend'}
            style={{...FONTS.Bold14, marginTop: 10}}
          />
        </View>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              width: 240,
              marginTop: 10,
              backgroundColor: COLORS.secondary,
              alignContent: 'flex-end',
              padding: 5,
            }}>
            <CustomText
              text={'Play Now'}
              style={{
                alignSelf: 'center',
                width: 180,
                ...FONTS.Medium11,
                color: COLORS.white,
              }}
            />
            <Icons name={play_now_icon} style={{alignSelf: 'flex-end'}} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Subscription;
