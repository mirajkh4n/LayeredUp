import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import CustomText from '../../components/Text';
import {styles} from './index.style';
import {FlatList} from 'react-native-gesture-handler';
import {popularTopics} from '../../constants/config';

const Forum = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <MainHeader isSearchbar={true} isPlusIcon={true} title={'Forum'} />
      <ImageBackground source={images.logo_background} style={{flex: 1}}>
        <View style={styles.main_container}>
          <View style={styles.topic_view}>
            <CustomText text={'Popular Topics'} style={styles.topic_txt} />
            <TouchableOpacity>
              <CustomText text={'See All'} style={styles.seeAll_txt} />
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={popularTopics}
            renderItem={({item, ind}) => (
              <View style={styles.list_mainView}>
                <View style={styles.list_container}>
                  <Image source={item.image} style={styles.topic_avatar} />
                  <CustomText text={item.name} style={styles.topic} />
                  <View style={styles.minus_icon_view}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ForumDetails');
                      }}>
                      <Image source={item.icon} style={styles.minus_icon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Forum;
