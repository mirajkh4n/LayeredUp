import React, {useState, useContext} from 'react';
import {
  View,
  ImageBackground,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {Container, CustomButton, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import Setting_back_icon from '../../assets/icons/Setting_back_icon';
import {COLORS, FONTS, SIZES} from '../../constants';
import {styles} from './index.style';
import cancel_icon from '../../assets/icons/cancel_icon';
import {AuthContext} from '../../navigation/AuthProvider';
import CustomText from '../../components/Text';

const Settings = ({navigation}) => {
  const {logout, user} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  return (
    <Container scroll={true}>
      <MainHeader
        title={'Settings'}
        showRightIcon={true}
        onPressIcon={() => navigation.goBack()}
      />
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
          <TouchableOpacity
            style={{paddingTop: 10}}
            onPress={() => setStatusModalVisible(true)}>
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
          <TouchableOpacity
            style={{paddingTop: 10}}
            onPress={() => navigation.navigate('PrivacySettings')}>
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
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => setModalVisible(true)}>
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
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                padding: 10,
                alignSelf: 'flex-end',
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icons name={cancel_icon} />
            </TouchableOpacity>
            <Text text={'LogOut'} style={{...FONTS.Regular25}} />
            <Text
              text={'Are you Sure you want to logout?'}
              style={{...FONTS.Regular15, paddingTop: SIZES.padding}}
            />
            <CustomButton
              text={'Yes'}
              customstyle={{paddingHorizontal: 150}}
              onPress={() => logout()}
            />
          </View>
        </View>
      </Modal>
      <Modal
        transparent={true}
        animationType={'slide'}
        visible={statusModalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground
              source={images.logo_2}
              resizeMode="contain"
              style={{flex: 1}}>
              <View>
                <TouchableOpacity
                  style={{alignSelf: 'flex-end', padding: 10}}
                  onPress={() => setStatusModalVisible(!statusModalVisible)}>
                  <Icons name={cancel_icon} />
                </TouchableOpacity>
                <CustomText
                  text={'Set Your Status'}
                  style={{alignSelf: 'center', ...FONTS.Medium22}}
                />
                <CustomText
                  text={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,'
                  }
                  style={{}}
                />
                <View
                  style={{
                    alignItems: 'center',
                    paddingTop: SIZES.padding2,
                    paddingHorizontal: 10,
                  }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.secondary,
                      padding: 10,
                      width: '90%',
                      alignItems: 'center',
                    }}>
                    <CustomText
                      text={'Available'}
                      style={{color: COLORS.white, ...FONTS.Regular15}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      width: '90%',
                      borderColor: COLORS.secondary,
                      borderWidth: 1,
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    <CustomText
                      text={'Away'}
                      style={{color: COLORS.secondary, ...FONTS.Regular15}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: 10,
                      width: '90%',
                      borderColor: COLORS.secondary,
                      borderWidth: 1,
                      marginTop: 10,
                      alignItems: 'center',
                    }}>
                    <CustomText
                      text={'Invisible'}
                      style={{color: COLORS.secondary, ...FONTS.Regular15}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.primary,
                      padding: 10,
                      width: '90%',
                      marginTop: 28,
                      alignItems: 'center',
                    }}>
                    <CustomText
                      text={'Save'}
                      style={{color: COLORS.white, ...FONTS.Regular15}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Settings;
