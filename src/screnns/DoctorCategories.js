import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DoctorCategories = (props) => {
  return (
    <View style={{marginLeft: props.marginLeft}}>
      <View
        style={{
          width: wp('18'),
          height: wp('18'),
          borderRadius: wp('5'),
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
          style={{fontFamily: 'Poppins-Light', fontSize: 13, color: 'black'}}>
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default DoctorCategories;
