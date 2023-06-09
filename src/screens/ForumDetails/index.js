import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {Container, CustomButton, ImageContainer, Text} from '../../components';
import InputFiled from '../../components/InputField';
import MainHeader from '../../components/MainHeader';
import CustomText from '../../components/Text';
import {COLORS, FONTS, SIZES} from '../../constants';
import images from '../../constants/images';
import {styles} from './index.style';

const ForumDetails = () => {
  return (
    <Container scroll={true}>
      <MainHeader title={'Forum'} isTopic={'Easiest way to get your case'} />
      <View style={{height: 70, backgroundColor: COLORS.primary, bottom: 30}}>
        <View style={{height: 1, backgroundColor: COLORS.white}}></View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            margin: 15,
            alignItems: 'center',
          }}>
          <CustomText text={'by'} style={{color: COLORS.white}} />
          <Image
            source={images.profiledp}
            style={{height: 30, width: 30, marginLeft: 10, marginRight: 10}}
          />
          <CustomText text={'Billy Tuker'} style={{color: COLORS.white}} />
        </View>
      </View>
      <ImageBackground source={images.logo_2} style={{flex: 1}}>
        <View style={styles.container}>
          <Text
            style={{...FONTS.Regular15, bottom: 20}}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          />
          <View
            style={{
              paddingTop: SIZES.padding,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text text={'Comments'} style={{...FONTS.Bold16}} />
            <Text
              text={'(2)'}
              style={{...FONTS.Bold14, color: COLORS.secondary}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: SIZES.padding,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={images.profiledp}
                style={{height: 70, width: 70}}
              />
              <Text
                text={'Miley T'}
                style={{
                  ...FONTS.Regular20,
                  paddingTop: SIZES.padding2,
                  paddingLeft: 10,
                }}
              />
            </View>
            <Text text={'08:01 pm'} />
          </View>
          <Text
            style={{...FONTS.Regular15}}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur'
            }
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: SIZES.padding,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={images.profiledp}
                style={{height: 70, width: 70}}
              />
              <Text
                text={'Miley T'}
                style={{
                  ...FONTS.Regular20,
                  paddingTop: SIZES.padding2,
                  paddingLeft: 10,
                }}
              />
            </View>
            <Text text={'08:01 pm'} />
          </View>
          <Text
            style={{...FONTS.Regular15}}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur'
            }
          />
          <InputFiled
            style={{height: 140, top: 10}}
            placeholder="Post Your Comments Here"
          />
          <View style={{bottom: 15}}>
            <CustomButton text={'Submit'} />
          </View>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default ForumDetails;
