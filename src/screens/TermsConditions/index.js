import React, {useState} from 'react';
import {View, ImageBackground, Image} from 'react-native';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import {FONTS, SIZES} from '../../constants';

const TermsConditions = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container scroll={true}>
      <MainHeader title={'Terms & Conditions'} showRightIcon={true} />
      <ImageBackground
        resizeMode="contain"
        source={images.logo_2}
        style={{flex: 1, paddingHorizontal: 20}}>
        <View>
          <Text
            text={'Terms'}
            style={{...FONTS.Regular25, paddingTop: SIZES.padding2}}
          />
          <Text
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,'
            }
            style={{...FONTS.Regular15, paddingTop: SIZES.padding2}}
          />
          <Text
            text={'Conditions'}
            style={{...FONTS.Regular25, paddingTop: SIZES.padding2}}
          />
          <Text
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,'
            }
            style={{...FONTS.Regular15, paddingTop: SIZES.padding2}}
          />
        </View>
      </ImageBackground>
    </Container>
  );
};

export default TermsConditions;
