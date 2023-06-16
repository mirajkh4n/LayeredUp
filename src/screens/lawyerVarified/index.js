import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Container, Icons} from '../../components';
import {styles} from './index.style';
import {COLORS, FONTS, SIZES} from '../../constants';
import images from '../../constants/images';
import drawer_icon from '../../assets/icons/drawer_icon';
import backIcon_white from '../../assets/icons/backIcon_white';
import CustomText from '../../components/Text';
import varified_icon from '../../assets/icons/varified_icon';
import time_icon from '../../assets/icons/time_icon';
import info_icon from '../../assets/icons/info_icon';
import dollar_icon from '../../assets/icons/dollar_icon';
import clock_icon from '../../assets/icons/clock_icon';
import info_white_icon from '../../assets/icons/info_white_icon';

const LawyerVerifiedProfile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        source={images.lawyerProfileAvatar}
        style={{height: 270}}
        resizeMode="cover">
        <View style={styles.header_main_view}>
          <Icons name={backIcon_white} />
          <CustomText
            text={'Silvester Dohm'}
            style={{color: COLORS.white, ...FONTS.Regular20, marginRight: 30}}
          />
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icons name={drawer_icon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          height: 25,
        }}>
        <View style={{backgroundColor: COLORS.secondary, height: 5}}>
          <Icons
            name={varified_icon}
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
              bottom: 8,
            }}
          />
        </View>
      </View>
      <Container
        scroll={true}
        customStyle={{marginTop: 28, paddingHorizontal: 20}}>
        <ImageBackground
          resizeMode="center"
          source={images.logo_background}
          style={{flex: 1, marginHorizontal: 20}}>
          <View style={styles.all_header_view}>
            <CustomText
              text={'Firm Name'}
              style={{color: COLORS.black, ...FONTS.Bold14}}
            />
            <CustomText
              text={'ABC Law Firm'}
              style={{color: COLORS.black, ...FONTS.Regular13}}
            />
          </View>
          <View style={styles.all_header_view}>
            <CustomText
              text={'License Number'}
              style={{color: COLORS.black, ...FONTS.Bold14}}
            />
            <CustomText
              text={'12-34567-89'}
              style={{color: COLORS.black, ...FONTS.Regular13}}
            />
          </View>
          <View style={styles.title_view}>
            <CustomText
              text={'Referral Count:'}
              style={{color: COLORS.black, ...FONTS.Bold14}}
            />
            <View style={styles.count_view}>
              <CustomText
                text={'3'}
                style={{color: COLORS.white, ...FONTS.Regular13}}
              />
            </View>
          </View>
          <View style={styles.title_view}>
            <Icons name={info_icon} />
            <CustomText text={'About Us'} style={styles.title_text} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomText
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
              }
              style={{color: COLORS.black, ...FONTS.Regular11, marginTop: 10}}
            />
          </View>
          <View style={styles.title_view}>
            <Icons name={info_icon} />
            <CustomText
              text={'Description of Services'}
              style={styles.title_text}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomText
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt '
              }
              style={{color: COLORS.black, ...FONTS.Regular11, marginTop: 10}}
            />
          </View>
          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <Icons name={dollar_icon} />
              <CustomText text={'Cost'} style={styles.title_text} />
            </View>
            <View style={styles.high_view}>
              <CustomText text={'High'} style={styles.high_text} />
              <Icons name={info_white_icon} />
            </View>
          </View>
          <View style={styles.title_view}>
            <Icons name={clock_icon} />
            <CustomText text={'Operational Hours'} style={styles.title_text} />
          </View>

          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <CustomText text={'Monday'} style={styles.title_text} />
            </View>
            <View style={styles.title_view}>
              <CustomText text={'09:00 AM - '} style={styles.title_text} />
              <CustomText text={'06:00 PM'} style={styles.title_text} />
            </View>
          </View>
          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <CustomText text={'Tuesday'} style={styles.title_text} />
            </View>
            <View style={styles.title_view}>
              <CustomText text={'09:00 AM - '} style={styles.title_text} />
              <CustomText text={'06:00 PM'} style={styles.title_text} />
            </View>
          </View>
          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <CustomText text={'Wednesday'} style={styles.title_text} />
            </View>
            <View style={styles.title_view}>
              <CustomText text={'09:00 AM - '} style={styles.title_text} />
              <CustomText text={'06:00 PM'} style={styles.title_text} />
            </View>
          </View>
          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <CustomText text={'Thursday'} style={styles.title_text} />
            </View>
            <View style={styles.title_view}>
              <CustomText text={'09:00 AM - '} style={styles.title_text} />
              <CustomText text={'06:00 PM'} style={styles.title_text} />
            </View>
          </View>
          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <CustomText text={'Friday'} style={styles.title_text} />
            </View>
            <View style={styles.title_view}>
              <CustomText text={'09:00 AM - '} style={styles.title_text} />
              <CustomText text={'06:00 PM'} style={styles.title_text} />
            </View>
          </View>
          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <CustomText text={'Saturday'} style={styles.title_text} />
            </View>
            <View style={styles.title_view}>
              <CustomText text={'Closed'} style={styles.title_text} />
            </View>
          </View>
          <View style={styles.all_header_view}>
            <View style={styles.title_view}>
              <CustomText text={'Sunday'} style={styles.title_text} />
            </View>
            <View style={styles.title_view}>
              <CustomText text={'Closed'} style={styles.title_text} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              bottom: 20,
              height: 20,
            }}></View>
        </ImageBackground>
      </Container>
    </View>
  );
};

export default LawyerVerifiedProfile;
