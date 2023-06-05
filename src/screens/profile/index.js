import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Switch,
} from 'react-native';
import MainHeader from '../../components/MainHeader';
import {Container, CustomButton, Icons, Text} from '../../components';
import images from '../../constants/images';
import {COLORS, FONTS, SIZES} from '../../constants';
import upload_icon from '../../assets/icons/upload_icon';
import capture_icon from '../../assets/icons/capture_icon';
import InputFiled from '../../components/InputField';

const Profile = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container scroll={true}>
      <MainHeader title={'Lawyer Profile'} customStyle={{height: 120}} />
      <View style={{alignItems: 'center'}}>
        <Image
          source={images.lawyer_profile}
          style={{
            height: 120,
            width: 120,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: SIZES.padding2,
          }}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Icons name={upload_icon} style={{paddingRight: 10}} />
            <Text
              text={'Upload'}
              style={{color: COLORS.secondary, ...FONTS.Regular15}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row', paddingLeft: 20}}>
            <Icons name={capture_icon} style={{paddingLeft: 10}} />
            <Text
              text={'Capture'}
              style={{
                color: COLORS.secondary,
                ...FONTS.Regular15,
                paddingLeft: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
        <View style={{paddingHorizontal: 40}}>
          <InputFiled placeholder={'Name'} />
          <InputFiled placeholder={'Email'} />
          <InputFiled placeholder={'Phone Number'} />
          <InputFiled placeholder={'Address'} style={{height: 100}} />
          <InputFiled placeholder={'Age'} />
          <InputFiled placeholder={'Gender'} />
          <Text
            text={'Description of Services'}
            style={{...FONTS.Bold18, paddingTop: SIZES.padding}}
          />
          <InputFiled placeholder={'Description'} />
          <View>
            <Text
              text={'Cost'}
              style={{...FONTS.Bold18, paddingTop: SIZES.padding}}
            />
          </View>
          <Text
            text={'Secretary Info'}
            style={{...FONTS.Bold18, paddingTop: SIZES.padding}}
          />
          <InputFiled placeholder={'Secretary Name'} />
          <InputFiled placeholder={'Secretary Email'} />
          <Text
            text={'Operational Hours'}
            style={{...FONTS.Bold18, paddingTop: SIZES.padding}}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text text={'Monday'} style={{...FONTS.Regular15}} />
            <Text
              text={'09:00 AM - 6:00 PM'}
              style={{...FONTS.Bold14, color: '#4A68A2'}}
            />
            <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text text={'Tuesday'} style={{...FONTS.Regular15}} />
            <Text
              text={'09:00 AM - 6:00 PM'}
              style={{...FONTS.Bold14, color: '#4A68A2'}}
            />
            <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text text={'Wednesday'} style={{...FONTS.Regular15}} />
            <Text
              text={'09:00 AM - 6:00 PM'}
              style={{...FONTS.Bold14, color: '#4A68A2'}}
            />
            <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text text={'Thursday'} style={{...FONTS.Regular15}} />
            <Text
              text={'09:00 AM - 6:00 PM'}
              style={{...FONTS.Bold14, color: '#4A68A2'}}
            />
            <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text text={'Friday'} style={{...FONTS.Regular15}} />
            <Text
              text={'09:00 AM - 6:00 PM'}
              style={{...FONTS.Bold14, color: '#4A68A2'}}
            />
            <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text text={'Saturday'} style={{...FONTS.Regular15}} />
            <Text
              text={'Off'}
              style={{...FONTS.Bold14, color: 'red',paddingLeft:130}}
            />
            <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text text={'Sunday'} style={{...FONTS.Regular15}} />
            <Text
              text={'Off'}
              style={{...FONTS.Bold14, color: 'red',paddingLeft:130}}
            />
            <Switch
              trackColor={{false: '#000', true: '#E39F20'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <InputFiled placeholder={'Add Details'} style={{height: 150}} />
          <View style={{paddingTop:50,bottom:10}}>
          <CustomButton text={'Save'} />
          </View>
         
        </View>
       </Container>
  );
};

export default Profile;
