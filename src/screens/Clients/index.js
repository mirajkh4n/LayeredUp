import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import {COLORS, FONTS, SIZES} from '../../constants';
import {FormsData} from '../../constants/config';
import {styles} from './index.style';
import cancel_icon from '../../assets/icons/cancel_icon';
import images from '../../constants/images';

const Clients = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container scroll={true}>
      <MainHeader
        title={'Clients'}
        onPressIcon={() => navigation.goBack()}
        isSearchbar
      />
      <View style={{paddingHorizontal: 20}}>
        <Text text={'Clients'} style={{...FONTS.Bold16}} />
        <FlatList
          ListFooterComponent={<View style={{height: 20}}></View>}
          showsVerticalScrollIndicator={false}
          data={FormsData}
          renderItem={({item, ind}) => (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
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
                    onPress={() => {
                      navigation.navigate('Chat', {
                        data: item,
                      });
                    }}
                    style={[styles.btn]}>
                    <Text text={'Message'} style={{color: COLORS.white}} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal transparent={true} animationType={'slide'} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ImageBackground source={images.logo_2} style={{flex: 1}}>
              <View>
                <TouchableOpacity
                  style={{alignSelf: 'flex-end', padding: 10}}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Icons name={cancel_icon} />
                </TouchableOpacity>
                <Image
                  source={images.lawyer_profile}
                  style={{height: 200, width: 200, alignSelf: 'center'}}
                />
                <View
                  style={{
                    alignItems: 'center',
                    paddingTop: SIZES.padding2,
                    paddingHorizontal: 50,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text text={'Age: '} style={{...FONTS.Bold16}} />
                    <Text text={'45 Years'} style={{...FONTS.Medium15}} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text text={'Gender: '} style={{...FONTS.Bold18}} />
                    <Text text={'Female'} style={{...FONTS.Medium18}} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text text={'Region: '} style={{...FONTS.Bold18}} />
                    <Text text={'Western Asia'} style={{...FONTS.Medium18}} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text text={'Countary: '} style={{...FONTS.Bold18}} />
                    <Text text={'America'} style={{...FONTS.Medium18}} />
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text text={'Address: '} style={{...FONTS.Bold18}} />
                    <Text
                      text={
                        '101 Independence  Avenue, S.E. Washington, D.C. 20559-6000'
                      }
                      style={{...FONTS.Medium18}}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Clients;
