import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {Container, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import {styles} from './index.style';
import {CategoryData} from '../../constants/config';

const CategoryLawyer = () => {
  return (
    <Container>
      <MainHeader title={'Category Lawyer'} isSearchbar={true} />
      <View style={{paddingHorizontal: 20}}>
        <Text
          text={'Select Categories'}
          style={[styles.title, {paddingLeft: 10}]}
        />
        <FlatList
          //   ListFooterComponent={<View style={{ height: 20 }}></View>}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          showsVerticalScrollIndicator={false}
          data={CategoryData}
          renderItem={({item, ind}) => (
            <View key={item} style={styles.container}>
              <Image source={item.image} style={styles.profile} />
              <Text
                text={item.title}
                style={[styles.title, {textAlign: 'center'}]}
              />
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default CategoryLawyer;
