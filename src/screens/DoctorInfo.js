import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DoctorInfoStyle} from '../assets/styles/DoctorInfoStyle';
import DoctorHeader from './DoctorHeader';
const DoctorInfo = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={DoctorInfoStyle.mainView}>
          <ImageBackground
            style={{width: wp('90'), height: hp('50'), alignSelf: 'center'}}
            source={require('../assets/images/doctorsInfo.png')}
            resizeMode="cover">
            <View style={{marginTop: 10}}>
              <DoctorHeader></DoctorHeader>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorInfo;
