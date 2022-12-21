import React from 'react';
import {SafeAreaView} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const NeoButton = ({
  marginBottom,
  marginTop,
  width,
  height,
  backgroundColor,
  borderRadius,
  lightShadowColor,
  darkShadowColor,
  inner,
  children,
}) => {
  return (
    <Neomorph
      inner={inner}
      lightShadowColor={lightShadowColor}
      darkShadowColor={darkShadowColor}
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        width: width,
        height: height,
        borderRadius: borderRadius,
        shadowRadius: 4,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </Neomorph>
  );
};

export default NeoButton;
