import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants';

const InputFiled = ({
  style,
  placeholder,
  secureText,
  KeyboardType,
  defaultValue,
  onFocus,
  onBlur,
  ref,
  isEdit,
  value,
  returnKeyType,
  multiline,
  onChangeText,
}) => {
  return (
    <TextInput
      ref={ref}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secureText}
      onBlur={onBlur}
      onFocus={onFocus}
      editable={isEdit}
      defaultValue={defaultValue}
      keyboardType={KeyboardType}
      returnKeyType={returnKeyType}
      multiline={multiline}
      onChangeText={onChangeText}
      style={[styles.input, style]}
    />
  );
};

export default InputFiled;

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingLeft: SIZES.padding2,
    marginTop: SIZES.padding2,
    color: COLORS.black,
    backgroundColor: COLORS.text_Input,
  },
});
