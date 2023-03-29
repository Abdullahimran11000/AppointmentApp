import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppColor } from '../../assets/colors/AppColor';

import {AppointmentStyle} from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';

const CancelledAppointmentCard = ({item, onPress}) => {
  const [showButton, setShowButton] = useState(false);
  return (
    <Neomorph
      style={{width: wp(95),
        height: showButton ? hp(33) : hp(23),
        margin: wp(2.5),
        borderRadius: 30,
        backgroundColor: AppColor.whiteShade,
        shadowRadius:3
      }}>
      <View
        style={{
          width: wp('18'),
          height: wp('20'),
          marginLeft: wp(7),
          marginTop: hp(3),
        }}>
        <Image
          style={AppointmentStyle.doctorImage}
          source={require('../../assets/images/doctorsInfo.png')}></Image>
      </View>

      <View
        style={{
          position:'absolute',
          alignSelf:'center',
          justifyContent:'center',
          marginTop:hp(4),
          width:wp(38)
        }}>
        <View style={{position: 'absolute',width:wp(55),alignItems:'flex-end'}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: wp('6'),
              height: wp('6'),
              borderRadius: wp('6'),
              backgroundColor: AppColor.blackOpacity1,
            }}
            onPress={() => setShowButton(!showButton)}>
            <Icon name="angle-down" size={wp(4)} color={AppColor.black}></Icon>
          </TouchableOpacity>
        </View>
          <Text style={AppointmentStyle.doctorText}>{item.name}</Text>
          <Text style={AppointmentStyle.doctorCategory}>{item.deptName}</Text>
      </View>

      <View style={AppointmentStyle.secondFooterView}>
        <Icon size={wp(3.5)} name="calendar" color={AppColor.primary}></Icon>
        <Text style={AppointmentStyle.secondDoctorText}>{item.date}</Text>

        <Icon size={wp(3.5)} name="clock-o" color={AppColor.primary}></Icon>
        <Text style={AppointmentStyle.secondDoctorText}>{item.time}</Text>

        <Icon size={wp(3.5)} name="wechat" color={AppColor.primary}></Icon>
        <TouchableOpacity onPress={onPress}>
          <Text style={AppointmentStyle.secondDoctorText}>
            {item.appDestination}
          </Text>
        </TouchableOpacity>
      </View>
      {showButton ? (
        <View style={AppointmentStyle.footerOpcaityView}>
          <TouchableOpacity style={AppointmentStyle.footerOpacityButton}>
            <Text style={AppointmentStyle.footerButtonText}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={AppointmentStyle.footerOpacityButton}>
            <Text style={AppointmentStyle.footerButtonText}>Reschedule</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </Neomorph>
  );
};
export default CancelledAppointmentCard;
