import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Neomorph} from 'react-native-neomorph-shadows';
import {AppColor} from '../../assets/colors/AppColor';
import { NotificationStyle } from '../../assets/styles/AnimatedDrawerStyle/NotificationStyle';

const Notifications = ({item,onPress}) => {
    return (
        <Neomorph style={NotificationStyle.innerItems}>
        <TouchableOpacity style={NotificationStyle.headContImageCont} onPress={onPress}>
          <item.iconprovider style={NotificationStyle.iconstyle} name={item.iconname} size={wp('6')} />
          <View style={NotificationStyle.headContMiddleCont}>
            <View style={NotificationStyle.middleInnerFirstCont}>
              <Text style={NotificationStyle.middleInnerContFirstHeading}>
                {item.title}
              </Text>
            </View>
            <View style={NotificationStyle.middleInnerSecondCont}>
              <Text style={NotificationStyle.middleInnerContSecondHeading} >
                {item.time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Neomorph>
    )
}

export default Notifications