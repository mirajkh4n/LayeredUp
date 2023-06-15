import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import {styles} from './index.style';
import {COLORS, FONTS, SIZES} from '../../constants';
import {FormsData} from '../../constants/config';
import cancel_icon from '../../assets/icons/cancel_icon';

const Forms = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalExpand, setModalExpand] = useState(false);
  return (
    <Container>
      <MainHeader title={'Forms'} isSearchbar={true}     onPressIcon={() => navigation.goBack()}/>
      <ImageBackground
        resizeMode="contain"
        source={images.logo_2}
        style={{flex: 1, paddingHorizontal: 20}}>
        <FlatList
          ListFooterComponent={<View style={{height: 20}}></View>}
          showsVerticalScrollIndicator={false}
          data={FormsData}
          renderItem={({item, ind}) => (
            <View key={item} style={styles.container}>
              <Image source={item.image} style={styles.profile} />
              <View style={{paddingRight: 30}}>
                <Text text={item.name} style={[styles.title]} />
                <Text
                  text={item.level}
                  style={{color: '#E29F22', ...FONTS.Regular13}}
                />
              </View>
              <View style={{paddingRight: 10}}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  style={[styles.btn, {backgroundColor: COLORS.primary}]}>
                  <Text text={'Forward'} style={{color: COLORS.white}} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, {marginTop: 5}]}>
                  <Text text={'Read Now'} style={{color: COLORS.white}} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {marginTop: 5, backgroundColor: COLORS.primary},
                  ]}>
                  <Text text={'Chat Now'} style={{color: COLORS.white}} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        <Modal transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{alignSelf: 'flex-end', padding: 10}}
                onPress={() => setModalVisible(!modalVisible)}>
                <Icons name={cancel_icon} />
              </TouchableOpacity>
              <Text text={'Forward'} style={{...FONTS.Regular25}} />
              <View style={{flexDirection: 'row', paddingTop: SIZES.padding}}>
                <TouchableOpacity style={styles.modalBtn}>
                  <Text
                    text={'Send to Secretary'}
                    style={{color: COLORS.white, ...FONTS.Regular13}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalBtn, {marginHorizontal: 20}]}>
                  <Text
                    text={'Send to Colleague'}
                    style={{color: COLORS.white, ...FONTS.Regular13}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </Container>
  );
};

export default Forms;
