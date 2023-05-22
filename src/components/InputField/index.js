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
      style={[styles.input, style]}
    />
  );
};

export default InputFiled;

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding,
    color: COLORS.black,
    backgroundColor: COLORS.inputBackGround,
    borderRadius: SIZES.padding * 2,
  },
});
