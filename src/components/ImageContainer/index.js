import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import images from '../../constants/images';

function ImageContainer({children, customStyle, onBoarding_background}) {
  return (
    <ImageBackground
      style={[styles.main_view, customStyle]}
      source={
        onBoarding_background ? images.background_image : images.auth_background
      }
      resizeMode="stretch">
      {children}
    </ImageBackground>
  );
}

export default ImageContainer;
export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
  },
});
