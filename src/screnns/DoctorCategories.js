import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../assets/colors/AppColor';
import Octicons from 'react-native-vector-icons/Octicons';

const DoctorCategories = (props) => {
  const [showDot, setShowDot] = useState(false);

  return (
    <TouchableOpacity style={{width: props.outerWidth, height: props.outerHeight, borderRadius: props.outerRadius, margin: props.outerMargin, alignItems: props.alignItems, justifyContent: props.justifyContent}} onPress={()=> setShowDot(!showDot)}>
      {showDot? <Octicons name="dot-fill" size={wp('5')} color={AppColor.primary}/> : <View style={{width: wp('5'), height: wp('5')}}></View>}
      <View style={{width: props.innerWidth, height: props.innerHeight, borderRadius: props.innerRadius, backgroundColor: props.backgroundColor, alignItems: props.alignItems, justifyContent: props.justifyContent}}>
        <View>
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
        </View>
      </View>  
      <View style={{width: props.textWidth, marginTop: wp('2')}}>
        <Text
          style={{fontFamily: 'Poppins-Regular', fontSize: wp('3'), color: AppColor.black, textAlign:'center'}}>
          {props.deptName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCategories;
