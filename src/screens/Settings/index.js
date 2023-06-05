import React from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import Setting_back_icon from '../../assets/icons/Setting_back_icon';
import {FONTS} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './index.style';

const Settings = ({navigation}) => {
  return (
    <Container scroll={true}>
      <MainHeader title={'Settings'} showRightIcon={true} />
      <ImageBackground
        resizeMode="contain"
        source={images.logo_2}
        style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.container}>
          <View>
            <Text text={'Change Status'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 10}}>
            <Icons name={Setting_back_icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <Text text={'Message Settings'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 10}}>
            <Icons name={Setting_back_icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <Text text={'Privacy Settings'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 10}} onPress={() => navigation.navigate('PrivacySettings')}>
            <Icons name={Setting_back_icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <Text text={'Edit Profile'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 10}}>
            <Icons name={Setting_back_icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => logout()} style={styles.logoutBtn}>
          <Image
            source={images.logOut_icon}
            style={{height: 20, width: 20, paddingLeft: 20}}
          />
          <Text
            text={'LogOut'}
            style={{color: 'red', ...FONTS.Regular20, paddingLeft: 10}}
          />
        </TouchableOpacity>
      </ImageBackground>
    </Container>
  );
};

export default Settings;
