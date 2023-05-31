import React, {useContext} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, CustomButton, Icons, Text} from '../../components';
import {AuthContext} from '../../navigation/AuthProvider';
import {styles} from './index.style';
import images from '../../constants/images';
import drawer_icon from '../../assets/icons/drawer_icon';
import {FONTS, SIZES} from '../../constants';

const Home = () => {
  const {logout, user} = useContext(AuthContext);
  return (
    <Container>
      <View style={styles.container}>
        <Image source={images.profile} style={styles.profile} />
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
        <TouchableOpacity style={{paddingTop: SIZES.padding}}>
          <Icons name={drawer_icon} />
        </TouchableOpacity>
      </View>
      <View>
        <CustomButton onPress={() => logout()} text={'Logout'} />
      </View>
    </Container>
  );
};

export default Home;
