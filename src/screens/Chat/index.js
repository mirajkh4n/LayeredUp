import React, {useState, useCallback, useEffect} from 'react';
import {View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import backIcon_white from '../../assets/icons/backIcon_white';
import drawer_icon from '../../assets/icons/drawer_icon';
import options_icon from '../../assets/icons/options_icon';
import send_icon from '../../assets/icons/send_icon';
import video_icon from '../../assets/icons/video_icon';
import {Container, Icons, Text} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import images from '../../constants/images';
import {styles} from './index.style';

const Chat = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const {name, active, inActive} = route.params;
  // console.log(name);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const customtInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: COLORS.primary,
          color: COLORS.white,
        }}
      />
    );
  };
  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={{backgroundColor: COLORS.secondary, padding: 10}}>
          <Icons name={send_icon} />
        </View>
      </Send>
    );
  };
  const randerBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.text_Input,
          },
        }}
      />
    );
  };
  const scrollToBottomComponent = props => {};

  return (
    <Container>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <Icons name={backIcon_white} />
          <Image source={images.profiledp} style={styles.profile} />
          <View style={{marginLeft: 10}}>
            <Text text={name} style={{color: '#F3F4F4', ...FONTS.Bold16}} />
            <Text
              text={'Active'}
              style={{color: '#3EDE2C', ...FONTS.Regular11}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', paddingHorizontal: 25}}>
          <TouchableOpacity style={{paddingRight: 25}}>
            <Icons name={video_icon} />
          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <Icons name={options_icon} />
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        scrollToBottom
        alwaysShowSend={true}
        showAvatarForEveryMessage={true}
        messages={messages}
        onSend={messages => onSend(messages)}
        renderInputToolbar={props => customtInputToolbar(props)}
        user={{
          avatar: images.profiledp,
        }}
        textInputStyle={{color: COLORS.white}}
        randerBubble={randerBubble}
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </Container>
  );
};

export default Chat;
