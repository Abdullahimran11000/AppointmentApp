import React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {ScheduleStyle} from '../../assets/styles/DashboardStyle/ScheduleStyle';
import NeoButton from '../NeoMorphButton/NeoButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColor';

const AppointmentDetailsFlatList = ({item}) => {
  return (
    <SafeAreaView>
        <TouchableOpacity>
          <NeoButton
            width={wp('29')}
            height={hp('7')}
            marginLeft={wp(3)}
            backgroundColor={AppColor.whiteDark}
            borderRadius={20}
            marginTop={wp(3)}>
            <Text style={{color: AppColor.black,fontFamily: 'Poppins-SemiBold',fontSize: wp(3.5),borderRadius:20}}>
              {item.appointmentData}
            </Text>
          </NeoButton>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AppointmentDetailsFlatList;
