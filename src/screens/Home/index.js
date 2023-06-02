import React, {useContext} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, CustomButton, Icons, Text} from '../../components';
import {styles} from './index.style';
import images from '../../constants/images';
import drawer_icon from '../../assets/icons/drawer_icon';
import {COLORS, FONTS, SIZES} from '../../constants';
import {TextInput} from 'react-native-gesture-handler';
import search_icon from '../../assets/icons/search_icon';
const Home = ({navigation}) => {
  return (
    <Container>
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
    </Container>
  );
};
export default Home;
