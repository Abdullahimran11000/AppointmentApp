import React from 'react';
import {View, TextInput} from 'react-native';
import {TextInputStyle} from '../../assets/styles/ComponentStyle/CustomTextInputStyle/TextInputStyle';
import {Neomorph} from 'react-native-neomorph-shadows';
import { AppColor } from '../../assets/colors/AppColor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const NeoTextInput = ({
  width,
  placeholder,
  keyboardType,
  secureTextEntry,
  styles,
  marginBottom,
  value,
  onChangeText
}) => {
  return (
    <View
      style={{
        width: wp('90'),
        height: hp('7'),
        alignSelf: 'center',
        marginBottom: marginBottom,
      }}>
      <Neomorph
        style={{
          width: width,
          height: hp('7'),
          borderRadius: wp('3'),
          marginTop: wp('2'),
          shadowRadius: 4,
          backgroundColor: AppColor.whiteShade,
        }}>
        <TextInput
          value={value}
          style={[TextInputStyle.inputStyle, styles]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </Neomorph>
    </View>
  );
};

export default NeoTextInput;