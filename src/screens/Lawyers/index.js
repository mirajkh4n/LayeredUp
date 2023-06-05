import React from 'react';
import {View, ImageBackground, FlatList, Image} from 'react-native';
import {Container, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import {LawyerData} from '../../constants/config';
import {styles} from './index.style';
import {FONTS, SIZES} from '../../constants';

const Lawyer = () => {
  return (
    <Container>
      <MainHeader title={'Lawyer'} isSearchbar={true} />
      <ImageBackground source={images.logo_background} style={{flex: 1}}>
        <View style={{paddingHorizontal: 20}}>
          <FlatList
            ListFooterComponent={<View style={{height: 20}}></View>}
            showsVerticalScrollIndicator={false}
            data={LawyerData}
            renderItem={({item, ind}) => (
              <View key={item} style={styles.container}>
                <Image source={item.image} style={styles.profile} />
                <View style={{paddingRight: SIZES.padding * 3.5}}>
                  <Text text={item.name} style={[styles.title]} />
                  <Text
                    text={item.category}
                    style={{color: '#E29F22', ...FONTS.Bold11}}
                  />
                </View>
                <Text
                  text={item.status}
                  style={{paddingRight: SIZES.padding, color: '#0CBF3C'}}
                />
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </Container>
  );
};

export default Lawyer;
