import React from 'react';
import {SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { DashboardStyle } from '../assets/styles/DashboardStyle';
import Feather from 'react-native-vector-icons/Feather'
import DoctorCard from './DoctorCard';


const SearchDoctor = props => {
  return (
    <SafeAreaView>
      <View>
        <View style={DashboardStyle.searchCont}>
          <View style={DashboardStyle.searchInnerCont}>
            <View style={DashboardStyle.searchIconOneCont}>
              <View style={DashboardStyle.seacrhIconOneInnerCont}>
                <Feather
                  name="search"
                  size={20}
                  color="rgba(0, 0, 0, 0.4)"></Feather>
              </View>
            </View>
            <View style={DashboardStyle.searchTextInputCont}>
              <TextInput
                placeholder="Search Doctor"
                maxLength={20}
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 15,
                  color: 'rgba(0, 0, 0, 0.4)',
                  marginBottom: -5,
                }}></TextInput>
            </View>
            <View style={DashboardStyle.searchIconTwoCont}>
              <TouchableOpacity style={DashboardStyle.searchIconTwoTouchable}>
                <SimpleLineIcons
                  name="equalizer"
                  color="rgba(0, 0, 0, 0.7)"
                  size={15}></SimpleLineIcons>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <View style={{marginTop: 20}}>
         <DoctorCard color={'rgba(195, 140, 222, 0.5)'} source={require('../assets/images/doctorsInfo.png')} name={'Dr. Amanda'} dept={'Dentist'} star={'4.5'} experience={'5 years'}/>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default SearchDoctor;
