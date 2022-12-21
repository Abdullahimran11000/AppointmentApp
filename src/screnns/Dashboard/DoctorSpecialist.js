import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackButton from '../ScrennHeader/BackButton';
import CategoriesFlatList from '../CategoriesFlatlist/CategoriesFlatList';
import { useNavigation } from '@react-navigation/core';
import { AppColor } from '../../assets/colors/AppColor';
import { CongratulationStyle } from '../../assets/styles/AuthStyle/CongratulationStyle';

const DoctorSpecialist = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={CongratulationStyle.mainView}>
      <BackButton onPress={()=>{navigation.goBack()}}>Doctor Specialist</BackButton>
      <CategoriesFlatList
        outerWidth={wp('20')}
        outerHeight={hp('22')}
        outerRadius={wp('7')}
        outerMargin={wp('5')}
        alignItems={'center'}
        justifyContent={'center'}
        innerWidth={wp('25')}
        innerHeight={wp('25')}
        innerRadius={wp('8')}
        boxWidth={wp('23')}
        boxHeight={wp('23')}
        boxRadius={wp('7')}
        textWidth={wp('25')}
        horizontal={true}
        />
    </SafeAreaView>
  );
};

export default DoctorSpecialist;
