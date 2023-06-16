import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
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

const Explore = ({navigation}) => {
  const ExploreData = [
    {
      title: 'Clients Forms',
      icon: client_forms_icon,
      goto: () => navigation.navigate('ClientsForms'),
    },
    {
      title: 'Manage Services',
      icon: manage_services,
      goto: () => navigation.navigate('Profile'),
    },
    {
      title: 'Meetings',
      icon: meetings_icon,
      goto: () => navigation.navigate('Profile'),
    },
    {
      title: 'Lawyer Grid',
      icon: lawyer_grid_icon,
      goto: () => navigation.navigate('CategoryLawyer'),
    },
    {
      title: 'My Subscription',
      icon: my_subscription,
      goto: () => navigation.navigate('Profile'),
    },
    {
      title: 'Forum',
      icon: forum,
      goto: () => navigation.navigate('Forum'),
    },
    {
      title: 'Explore',
      icon: explore_icon,
      goto: () => navigation.navigate('Home'),
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
      goto: () => navigation.navigate('QuestionarieForm'),
    },
  ];
  return (
    <Container>
      <MainHeader isHome={true} />
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
                style={[styles.title, {textAlign: 'center'}]}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

export default Explore;
