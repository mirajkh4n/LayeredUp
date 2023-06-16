import {View, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import {styles} from './index.style';
import {Container, Icons} from '../../components';
import {COLORS, FONTS} from '../../constants';
import drawer_icon from '../../assets/icons/drawer_icon';
import backIcon_white from '../../assets/icons/backIcon_white';
import CustomText from '../../components/Text';
import varified_icon from '../../assets/icons/varified_icon';
import unverified_icon from '../../assets/icons/unverified_icon';

const LawyerUnverifiedProfile = ({navigation}) => {
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
            name={unverified_icon}
            style={{
              alignSelf: 'flex-end',
              marginRight: 10,
              bottom: 8,
            }}
          />
        </View>
      </View>
      <Container scroll={true} customStyle={{paddingHorizontal: 30}}>
        <ImageBackground
          // resizeMode="center"
          source={images.logo_background}
          style={{flex: 1}}>
          <View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CustomText
                text={'Firm Name'}
                style={{width: 180, ...FONTS.Bold14}}
              />
              <CustomText text={'N/A'} style={{...FONTS.Regular13}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <CustomText
                text={'License Number'}
                style={{width: 180, ...FONTS.Bold14}}
              />
              <CustomText text={'N/A'} style={{...FONTS.Regular13}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CustomText
                text={'Referral Count:'}
                style={{width: 180, ...FONTS.Bold14}}
              />
              <CustomText text={'N/A'} style={{...FONTS.Regular13}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CustomText text={'Age'} style={{width: 180, ...FONTS.Bold14}} />
              <CustomText text={'45 Years'} style={{...FONTS.Regular13}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CustomText
                text={'Gender:'}
                style={{width: 180, ...FONTS.Bold14}}
              />
              <CustomText text={'Male'} style={{...FONTS.Regular13}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CustomText
                text={'Region:'}
                style={{width: 180, ...FONTS.Bold14}}
              />
              <CustomText text={'Western Asia'} style={{...FONTS.Regular13}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CustomText
                text={'Country:'}
                style={{width: 180, ...FONTS.Bold14}}
              />
              <CustomText text={'America'} style={{...FONTS.Regular13}} />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <CustomText
                text={'Address:'}
                style={{width: 180, ...FONTS.Bold14}}
              />
              <CustomText
                text={'101 Independence Avenue, S.E.Washington,D.C.20559-6000'}
                style={{...FONTS.Regular13}}
              />
            </View>
            <View style={{marginTop: 30}}>
              <CustomText text={'Note:'} style={{...FONTS.Bold14}} />
              <CustomText
                text={
                  'This profile is not verified by LawyeredUp. If this is your profile, you may sign up to get it verified and avail premium features of the App.'
                }
                style={{...FONTS.Regular13}}
              />
            </View>
          </View>
        </ImageBackground>
      </Container>
    </View>
  );
};

export default LawyerUnverifiedProfile;
