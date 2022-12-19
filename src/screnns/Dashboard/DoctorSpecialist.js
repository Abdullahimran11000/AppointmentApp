import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import {DoctorSpecialistStyle} from '../../assets/styles/DashboardStyle/DoctorSpecialistStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackButton from '../ScrennHeader/BackButton';
import CategoriesFlatList from '../CategoriesFlatlist/CategoriesFlatList';

const DoctorSpecialist = props => {
  return (
    <SafeAreaView>
      <BackButton onPress={()=>props.navigation.goBack()}>Doctor Specialist</BackButton>
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
        ></CategoriesFlatList>
    </SafeAreaView>
  );
};

export default DoctorSpecialist;
