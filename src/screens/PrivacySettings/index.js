import React,{useState} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import Setting_back_icon from '../../assets/icons/Setting_back_icon';
import {FONTS} from '../../constants';
import {Switch, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './index.style';
import cancel_icon from '../../assets/icons/cancel_icon';

const PrivacySettings = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container scroll={true}>
      <MainHeader title={'Privacy Settings'} showRightIcon={true} />
      <ImageBackground
        resizeMode="contain"
        source={images.logo_2}
        style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.container}>
          <View>
            <Text text={'Read Recipient'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
        <View style={styles.container}>
          <View>
            <Text text={'Meetings Archieve'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
        <View style={styles.container}>
          <View>
            <Text text={'Delete All Meetings'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 10}}>
            <Icons name={cancel_icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View>
            <Text text={'Terms & Conditions'} style={{...FONTS.Regular20}} />
            <Text
              text={'Lorem ipsum dolor sit amet, consectetur adipiscing '}
              style={{...FONTS.Regular11}}
            />
          </View>
          <TouchableOpacity style={{paddingTop: 10}} onPress={() => navigation.navigate('TermsConditions')}>
            <Icons name={Setting_back_icon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default PrivacySettings;
