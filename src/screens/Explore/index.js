import React from 'react';
import {View, FlatList,TouchableOpacity} from 'react-native';
import {Container, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import {ExploreData} from '../../constants/config';
import {styles} from './index.style';

const Explore = ({navigation}) => {
  return (
    <Container>
      <MainHeader isHome={true} />
      <View style={{paddingHorizontal:20,flex:1}}>
        <FlatList
          ListFooterComponent={<View style={{height: 20}}></View>}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          data={ExploreData}
          renderItem={({item, ind}) => (
            <TouchableOpacity key={item} style={styles.container} onPress={() =>navigation.navigate('QuestionarieForm')}>
              <Icons name={item.icon}/>
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
