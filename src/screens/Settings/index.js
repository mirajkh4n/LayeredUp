import React, {useState,useContext} from 'react';
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
import { AuthContext } from '../../navigation/AuthProvider';

const Settings = ({navigation}) => {
  const {logout, user} = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
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
            <CustomButton text={'Yes'} customstyle={{paddingHorizontal:150}} onPress={() => logout()}/>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Settings;
