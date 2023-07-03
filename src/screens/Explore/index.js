import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Modal} from 'react-native';
import cancel_icon from '../../assets/icons/cancel_icon';
import client_forms_icon from '../../assets/icons/client_forms_icon';
import explore_icon from '../../assets/icons/explore_icon';
import forum from '../../assets/icons/forum';
import invoice_history_icon from '../../assets/icons/invoice_history_icon';
import lawyer_grid_icon from '../../assets/icons/lawyer_grid_icon';
import manage_services from '../../assets/icons/manage_services';
import meetings_icon from '../../assets/icons/meetings_icon';
import my_subscription from '../../assets/icons/my_subscription';
import questionire_icon from '../../assets/icons/questionire_icon';
import settings_icon from '../../assets/icons/settings_icon';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import {styles} from './index.style';
import {RadioButton} from 'react-native-paper';
import {COLORS, FONTS} from '../../constants';

const Explore = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const ExploreData = [
    {
      title: 'Clients Forms',
      icon: client_forms_icon,
      goto: () => navigation.navigate('Clients'),
    },
    {
      title: 'Manage Services',
      icon: manage_services,
      goto: () => navigation.navigate(''),
    },
    {
      title: 'Meetings',
      icon: meetings_icon,
      goto: () => navigation.navigate(''),
    },
    {
      title: 'Lawyer Grid',
      icon: lawyer_grid_icon,
      goto: () => navigation.navigate('CategoryLawyer'),
    },
    {
      title: 'My Subscription',
      icon: my_subscription,
      goto: () => navigation.navigate('Subscription'),
    },
    {
      title: 'Forum',
      icon: forum,
      goto: () => navigation.navigate('Forum'),
    },
    {
      title: 'Explore',
      icon: explore_icon,
      goto: () => {
        navigation.navigate('Home');
      },
    },
    {
      title: 'Setting',
      icon: settings_icon,
      goto: () => navigation.navigate('Settings'),
    },
    {
      title: 'Invoice History',
      icon: invoice_history_icon,
      goto: () => navigation.navigate('Profile'),
    },
    {
      title: 'Questionarie',
      icon: questionire_icon,
      goto: () => {
        setModalVisible(true);
      },
    },
  ];
  return (
    <Container>
      <MainHeader
        isHome={true}
        showRightIcon={true}
        onPressNotification={() => navigation.openDrawer()}
        onPressIcon={() => navigation.goBack()}
      />
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <FlatList
          ListFooterComponent={<View style={{height: 20}}></View>}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          showsVerticalScrollIndicator={false}
          data={ExploreData}
          renderItem={({item, ind}) => (
            <TouchableOpacity
              key={item}
              style={styles.container}
              onPress={item.goto}>
              <Icons name={item.icon} />
              <Text
                text={item.title}
                style={[styles.title, {textAlign: 'center', paddingTop: 10}]}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{
                padding: 10,
                alignSelf: 'flex-end',
              }}
              onPress={() => setModalVisible(!modalVisible)}>
              <Icons name={cancel_icon} />
            </TouchableOpacity>
            <Text
              text={'Select Your Doc'}
              style={{color: COLORS.black, ...FONTS.Medium22}}
            />
            <View
              style={{
                alignItems: 'flex-start',
                width: '80%',
                padding: 10,
                paddingTop: 25,
              }}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  color={COLORS.secondary}
                  uncheckedColor={COLORS.secondary}
                  value="ExistingForm"
                  status={checked === 'ExistingForm' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('ExistingForm')}
                />
                <Text
                  text={'Select Existing Form'}
                  style={{color: COLORS.black, ...FONTS.Regular15}}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  color={COLORS.secondary}
                  uncheckedColor={COLORS.secondary}
                  value="QuestionarieForm"
                  status={
                    checked === 'QuestionarieForm' ? 'checked' : 'unchecked'
                  }
                  onPress={() => {
                    setChecked('QuestionarieForm'),
                      navigation.navigate('QuestionarieForm');
                    setModalVisible(!modalVisible);
                  }}
                />
                <Text
                  text={'Upload Form'}
                  style={{color: COLORS.black, ...FONTS.Regular15}}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <RadioButton
                  color={COLORS.secondary}
                  uncheckedColor={COLORS.secondary}
                  value={'QuestionarieCreateForm'}
                  status={
                    checked === 'QuestionarieCreateForm'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() => {
                    setChecked('QuestionarieCreateForm');
                    navigation.navigate('QuestionarieCreateForm');
                    setModalVisible(!modalVisible);
                  }}
                />
                <Text
                  text={'Create Questionaire'}
                  style={{color: COLORS.black, ...FONTS.Regular15}}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

export default Explore;
