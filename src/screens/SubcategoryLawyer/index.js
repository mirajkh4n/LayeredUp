import React, { useState } from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import { Container, Text } from '../../components';
import MainHeader from '../../components/MainHeader';
import { styles } from './index.style';
import CheckBox from 'react-native-check-box';
import images from '../../constants/images';
import { CategoryData, SubCategoryData } from '../../constants/config';
import { COLORS } from '../../constants';

const SubcategoryLawyer = () => {
    const [isCheck, setIsCheck] = useState(false);
  return (
    <Container>
      <MainHeader title={'Subcategory Lawyer'} isSearchbar={true} />
      <ImageBackground source={images.logo_background} style={{flex:1}}>
      <View style={{paddingHorizontal: 20}}>
        <Text text={'Select Subcategories'} style={[styles.title,{paddingLeft:10}]} />
        <FlatList
            ListFooterComponent={<View style={{ height: 20 }}></View>}
          showsVerticalScrollIndicator={false}
          data={SubCategoryData}
          renderItem={({item, ind}) => (
            <View
              key={item}
              style={styles.container}>
                <View>
              <Text text={item.title} style={[styles.title]} />
              <Text text={item.maincategory} style={[styles.title,{color:'#E29F22'}]} />
              </View>
              <CheckBox
                  isChecked={isCheck}
                  style={styles.check_box}
                  onClick={() => setIsCheck(!isCheck)}
                  checkedCheckBoxColor={COLORS.secondary}
                  uncheckedCheckBoxColor={COLORS.secondary}
                />
            </View>
          )}
        />
      </View>
      </ImageBackground>
     
    </Container>
  )
}

export default SubcategoryLawyer