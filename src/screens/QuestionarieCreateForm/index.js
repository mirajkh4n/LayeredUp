import {ImageBackground, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Container, CustomButton, Icons, Text} from '../../components';
import MainHeader from '../../components/MainHeader';
import images from '../../constants/images';
import {COLORS, FONTS} from '../../constants';
import {RadioButton} from 'react-native-paper';
import dropdown_icon from '../../assets/icons/dropdown_icon';
import InputFiled from '../../components/InputField';
import plus_yellow_Icon from '../../assets/icons/plus_yellow_Icon';

const QuestionarieCreateForm = () => {
  const [checked, setChecked] = useState('first');

  return (
    <Container scroll={true}>
      <MainHeader title={'Manage Questionnaire'} />
      <ImageBackground
        source={images.logo_background}
        style={{backgroundColor: 'red', flex: 1, paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text text={'Choose your form style'} style={{...FONTS.Bold14}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <RadioButton
              color={COLORS.secondary}
              uncheckedColor={COLORS.secondary}
              value="MultipleChoice"
              status={checked === 'MultipleChoice' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('MultipleChoice')}
            />
            <Text
              text={'Multiple Choice'}
              style={{color: COLORS.black, ...FONTS.Regular11, marginRight: 5}}
            />
            <Icons name={dropdown_icon} />
          </View>
        </View>
        <View style={{paddingHorizontal: 25}}>
          <InputFiled placeholder={'Question'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text text={'Choose your form style'} style={{...FONTS.Bold14}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text
              text={'Descriptive'}
              style={{color: COLORS.black, ...FONTS.Regular11, marginRight: 8}}
            />
            <Icons name={dropdown_icon} />
          </View>
        </View>
        <View style={{paddingHorizontal: 25}}>
          <InputFiled placeholder={'Question'} />
          <InputFiled placeholder={'Text'} style={{height: 100}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text text={'Choose your form style'} style={{...FONTS.Bold14}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text
              text={'Binary'}
              style={{color: COLORS.black, ...FONTS.Regular11, marginRight: 8}}
            />
            <Icons name={dropdown_icon} />
          </View>
        </View>
        <View style={{paddingHorizontal: 25}}>
          <InputFiled placeholder={'Question'} />
        </View>
        <View
          style={{
            backgroundColor: COLORS.text_Input,
            height: 50,
            width: '86%',
            alignSelf: 'center',
            top: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              color={COLORS.secondary}
              uncheckedColor={COLORS.secondary}
              value="Yes"
              status={checked === 'Yes' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Yes')}
            />
            <Text
              text={'Yes'}
              style={{color: COLORS.black, ...FONTS.Bold14, marginRight: 8}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
              color={COLORS.secondary}
              uncheckedColor={COLORS.secondary}
              value="No"
              status={checked === 'No' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('No')}
            />
            <Text
              text={'No'}
              style={{color: COLORS.black, ...FONTS.Bold14, marginRight: 8}}
            />
          </View>
        </View>
        <View
          style={{
            height: 60,
            flexDirection: 'row',
            alignSelf: 'flex-end',
            paddingHorizontal: 25,
            alignItems: 'center',
            top: 15,
          }}>
          <TouchableOpacity>
            <Icons name={plus_yellow_Icon} style={{marginRight: 8}} />
          </TouchableOpacity>
          <Text text={'Add Question'} style={{...FONTS.Regular13}} />
        </View>
        <CustomButton
          customstyle={{bottom: 25, paddingHorizontal: 40}}
          text={'save'}
        />
      </ImageBackground>
    </Container>
  );
};

export default QuestionarieCreateForm;
