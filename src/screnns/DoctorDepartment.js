import React from 'react';
import {SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import BackButton from './BackButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CategoriesFlatList from './CategoriesFlatList';

const DoctorDepartment = props => {
  return (
    <SafeAreaView>
      <View>
        <BackButton onPress={() => props.navigation.goBack()}>
          {'Categories'}
        </BackButton>
        <View
          style={{marginTop: wp('4'), width: wp('90'), alignSelf: 'center'}}>
          <CategoriesFlatList
            outerWidth={wp('20')}
            outerHeight={hp('13')}
            outerRadius={wp('7')}
            outerMargin={wp('5')}
            alignItems={'center'}
            justifyContent={'center'}
            innerWidth={wp('24')}
            innerHeight={wp('24')}
            innerRadius={wp('8')}
            boxWidth={wp('21')}
            boxHeight={wp('21')}
            boxRadius={wp('7')}
            textWidth={wp('24')}
            numColumns={3}></CategoriesFlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDepartment;
