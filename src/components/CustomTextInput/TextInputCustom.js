import React from 'react';
import {TextInput} from 'react-native';
import { TextInputStyle } from '../../assets/styles/ComponentStyle/CustomTextInputStyle/TextInputStyle';

const TextInputCustom = ({placeholder, keyboardType, secureTextEntry, styles}) => {
  return (
    <TextInput
      style={[TextInputStyle.inputStyle , styles]}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInputCustom;
