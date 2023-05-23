import React from 'react'
import { ImageBackground } from 'react-native'
import { images } from '../../constants'
import { styles } from './index.style'

function ImageContainer({children,customStyle,onBoarding_background }) {
  return (
    <ImageBackground
    style={[styles.main_view,customStyle]}
    source={ onBoarding_background ? images.onboarding_background : images.background_image1}
    resizeMode="stretch"
  >
    {children}
  </ImageBackground>
  )
}

export default ImageContainer