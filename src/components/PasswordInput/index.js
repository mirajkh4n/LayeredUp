import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import password_icon from '../../assets/icons/password_icon';
import {COLORS, FONTS, SIZES} from '../../constants';
import {Icons, Text} from '../index';

const IconInputField = ({
  style,
  placeholder,
  secureText,
  keyboardType,
  defaultValue,
  onFocus,
  forwardRef,
  isEdit,
  icon,
  inputStyle,
  rightIcon,
  iconStyle,
  onPressRightIcon,
  maxLength,
  onSubmitEditing,
  autoCapitalize = 'none',
  multiline,
  value,
  onChangeText,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const onHidePress = () => {
    setHidePassword(!hidePassword);
  };
  return (
    <View style={[styles.main_view, styles.errorInput, style]}>
      {icon && (
        <Icons name={icon ? icon : null} style={[styles.icon, iconStyle]} />
      )}
      <TextInput
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureText && hidePassword}
        placeholderTextColor={COLORS.text_gray}
        defaultValue={defaultValue}
        value={value}
        onFocus={onFocus}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        maxLength={maxLength}
        editable={isEdit}
        underlineColorAndroid="transparent"
        blurOnSubmit={false}
        onSubmitEditing={onSubmitEditing}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={secureText ? onHidePress : onPressRightIcon}
          activeOpacity={0.5}>
          <Icons name={rightIcon} style={[styles.rightIcon, iconStyle]} />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.text_Input,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.padding2,
    paddingLeft:15
  },
  rightIcon: {
    padding: SIZES.padding2,
  },
  input: {
    height: 50,
    color: COLORS.black,
    backgroundColor: COLORS.text_Input,
  },
});
export default IconInputField;
