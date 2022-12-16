import React, {useContext, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColor';
import Octicons from 'react-native-vector-icons/Octicons';
import AppContext from '../../assets/context/AppContext';

const DoctorCategories = ({
  outerWidth,
  outerHeight,
  outerRadius,
  outerMargin,
  innerWidth,
  innerHeight,
  innerRadius,
  backgroundColor,
  alignItems,
  justifyContent,
  item,
  boxWidth,
  boxHeight,
  boxRadius,
  textWidth,
  marginRight,
  marginBottom,
}) => {
  const {idOfSelectedCategoryDot, storeIdOfSelectedCategoryDot} =
    useContext(AppContext);
  // const [showDot, setShowDot] = useState(false);

  return (
    <TouchableOpacity
      style={{
        width: outerWidth,
        height: outerHeight,
        borderRadius: outerRadius,
        margin: outerMargin,
        marginBottom: marginBottom,
        marginRight: marginRight,
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
      onPress={() => storeIdOfSelectedCategoryDot(item.id)}>
      {idOfSelectedCategoryDot == item.id ? (
        <Octicons name="dot-fill" size={wp('5')} color={AppColor.primary} />
      ) : <View style={{width: wp('5'), height: wp('5')}}></View>}
      <View
        style={{
          width: innerWidth,
          height: innerHeight,
          borderRadius: innerRadius,
          backgroundColor: backgroundColor,
          alignItems: alignItems,
          justifyContent: justifyContent,
        }}>
        <View>
          <View
            style={{
              width: boxWidth,
              height: boxHeight,
              borderRadius: boxRadius,
              backgroundColor: item.color,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: wp('10'), height: wp('10')}}
              source={item.source}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <View style={{width: textWidth, marginTop: wp('2')}}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: wp('3'),
            color: AppColor.black,
            textAlign: 'center',
          }}>
          {item.deptName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DoctorCategories;
