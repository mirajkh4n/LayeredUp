import React from 'react';
import {
  View,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Container, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import {LawyerData} from '../../constants/config';
import {styles} from './index.style';
import {FONTS, SIZES} from '../../constants';

const Lawyer = ({navigation}) => {
  return (
    <Container>
      <MainHeader title={'Lawyer'} isSearchbar={true}     onPressIcon={() => navigation.goBack()}/>
      <ImageBackground source={images.logo_background} style={{flex: 1}}>
        <View style={{paddingHorizontal: 20}}>
          <FlatList
            ListFooterComponent={<View style={{height: 20}}></View>}
            showsVerticalScrollIndicator={false}
            data={LawyerData}
            renderItem={({item, ind}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('LawyerUnverifiedProfile')}>
                <View key={item} style={styles.container}>
                  <Image source={item.image} style={styles.profile} />
                  <View style={{paddingRight: SIZES.padding * 3.5}}>
                    <Text text={item.name} style={[styles.title]} />
                    <Text
                      text={item.category}
                      style={{color: '#E29F22', ...FONTS.Bold11}}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('LawyerVerifiedProfile')
                    }>
                    <Text
                      text={item.status}
                      style={{paddingRight: SIZES.padding, color: '#0CBF3C'}}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </Container>
  );
};

export default Lawyer;
