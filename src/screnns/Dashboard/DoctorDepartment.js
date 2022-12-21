import React from 'react';
import {SafeAreaView, View} from 'react-native';
import BackButton from '../ScrennHeader/BackButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CategoriesFlatList from '../CategoriesFlatlist/CategoriesFlatList';
import {DoctorDepartmentStyle} from '../../assets/styles/DashboardStyle/DoctorDepartmentStyle';
import {useNavigation} from '@react-navigation/core';

const DoctorDepartment = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={DoctorDepartmentStyle.mainView}>
      <View>
        <BackButton onPress={() =>{navigation.goBack()}}>
          {'Categories'}
        </BackButton>
        <View style={DoctorDepartmentStyle.flatListView}>
          <CategoriesFlatList
            outerWidth={wp('20')}
            outerHeight={hp('13')}
            outerRadius={wp('7')}
            outerMargin={wp('5.5')}
            alignItems={'center'}
            justifyContent={'center'}
            innerWidth={wp('24')}
            innerHeight={wp('24')}
            innerRadius={wp('8')}
            boxWidth={wp('21')}
            boxHeight={wp('21')}
            boxRadius={wp('7')}
            textWidth={wp('24')}
            marginBottom={wp('10')}
            numColumns={3}></CategoriesFlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDepartment;
