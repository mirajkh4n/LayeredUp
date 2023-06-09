import React from 'react';
import {View, ImageBackground} from 'react-native';
import {Container, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import {styles} from './index.style';
import {RadioButton} from 'react-native-paper';
import {COLORS, FONTS, SIZES} from '../../constants';
import images from '../../constants/images';

const QuestionarieForm = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <Container scroll={true}>
      <MainHeader title={'Questionarie Form'} />
      <ImageBackground
        resizeMode="contain"
        source={images.logo_2}
        style={{flex: 1, paddingHorizontal: 20}}>
        <View style={styles.container}>
          <Text text={'Lorem ipsum dolor sit amet?'} style={styles.title} />
          <Text
            text={'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'}
            style={styles.description}
          />
          <View style={{}}>
            <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
              <RadioButton
                uncheckedColor="#E39F20"
                color="#E39F20"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text
                text={'Lorem Ipsum'}
                style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
              />
            </View>
            <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
              <RadioButton
                uncheckedColor="#E39F20"
                color="#E39F20"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text
                text={'Lorem Ipsum'}
                style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
              />
            </View>
            <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
              <RadioButton
                uncheckedColor="#E39F20"
                color="#E39F20"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text
                text={'Lorem Ipsum'}
                style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
              />
            </View>
            <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
              <RadioButton
                uncheckedColor="#E39F20"
                color="#E39F20"
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text
                text={'Lorem Ipsum'}
                style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
              />
            </View>
          </View>
          <Text text={'Lorem ipsum dolor sit amet?'} style={styles.title} />
          <Text
            text={'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'}
            style={styles.description}
          />

          <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
            <RadioButton
              uncheckedColor="#E39F20"
              color="#E39F20"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text
              text={'Lorem Ipsum'}
              style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
            />
          </View>
          <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
            <RadioButton
              uncheckedColor="#E39F20"
              color="#E39F20"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text
              text={'Lorem Ipsum'}
              style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
            />
          </View>
          <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
            <RadioButton
              uncheckedColor="#E39F20"
              color="#E39F20"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text
              text={'Lorem Ipsum'}
              style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
            />
          </View>
          <View style={{flexDirection: 'row', paddingTop: SIZES.padding2}}>
            <RadioButton
              uncheckedColor="#E39F20"
              color="#E39F20"
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text
              text={'Lorem Ipsum'}
              style={{...FONTS.Bold14, paddingLeft: SIZES.padding2}}
            />
          </View>
        </View>
      </ImageBackground>
    </Container>
  );
};

export default QuestionarieForm;
