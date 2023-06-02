import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Container from '../../components/container';
import images from '../../constants/images';
import CustomText from '../../components/Text';
import {SIZES} from '../../constants';
import {styles} from './index.style';

const Login = ({navigation}) => {
  return (
    <Container scroll={true}>
      <View style={styles.container}>
        <Image
          source={images.login_logo}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <ImageBackground
        source={images.login_backImage}
        style={styles.image_container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('SignIn')}>
          <CustomText text={'Client'} style={styles.btnText} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {marginTop: SIZES.padding * 2}]}>
          <CustomText text={'Lawyer'} style={styles.btnText} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {marginTop: SIZES.padding * 2}]}>
          <CustomText text={'Law Firm'} style={styles.btnText} />
        </TouchableOpacity>
      </ImageBackground>
    </Container>
  );
};

export default Login;
