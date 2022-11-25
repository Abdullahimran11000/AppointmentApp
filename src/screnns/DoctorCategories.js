import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DoctorCategories = (props) => {
  return (
    <View style={{marginRight: props.marginRight, marginBottom: props.marginBottom}}>
      <View
        style={{
          width: props.boxWidth,
          height: props.boxHeight,
          borderRadius: props.boxRadius,
          backgroundColor: props.color,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: wp('10'), height: wp('10')}}
          source={props.source}
          resizeMode="cover"/>
      </View>
      <View style={{marginTop: 5}}>
        <Text
          style={{fontFamily: 'Poppins-Regular', fontSize: 11, color: 'black', textAlign:'center'}}>
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default DoctorCategories;
