import React, { useContext, useState } from 'react';
import {SafeAreaView, View} from 'react-native';
import DoctorsFlatList from '../components/DcotorsFlatlist/DoctorsFlatList';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../assets/colors/AppColor';
import {ScrollView} from 'react-native-virtualized-view';
import BackButton from '../components/ScrennHeader/BackButton';
import {SearchDoctorStyle} from '../assets/styles/DashboardStyle/SearchDoctorStyle';
import SearchBar from '../components/SearchBar/SerachBar';
import { useNavigation } from '@react-navigation/native';
import AppContext from '../assets/context/AppContext';

const SearchDoctor = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade, flex: 1}}>
      <ScrollView>
        <View>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>{'Search Doctor'}</BackButton>
          <SearchBar/>
        </View>
        <View style={SearchDoctorStyle.DoctorFlatListView}>
          <DoctorsFlatList
            horizontal={false}
            numColumns={2}
            marginRight={wp('16')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchDoctor;
