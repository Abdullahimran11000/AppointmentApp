import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DashboardStyle} from '../assets/styles/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import DoctorBar from './DoctorBar';
import DoctorCategories from './DoctorCategories';
import DoctorCard from './DoctorCard';

const Dashboard = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={DashboardStyle.headCont}>
            <View style={DashboardStyle.headContInnerCont}>
              <View style={DashboardStyle.headContImageCont}>
                <Image style={DashboardStyle.headContImageStyle} source={require('../assets/images/selfieOne.jpg')} resizeMode='cover'></Image> 
              </View>
              <View style={DashboardStyle.headContMiddleCont}>
                <View style={DashboardStyle.middleInnerFirstCont}>
                  <Text style={DashboardStyle.middleInnerContFirstHeading}>Hello Dara</Text>
                </View>
                <View style={DashboardStyle.middleInnerSecondCont}>
                  <Text style={DashboardStyle.middleInnerContSecondHeading}>How can you today?</Text>
                </View>
              </View>
              <View style={DashboardStyle.headContLastCont}>
                <TouchableOpacity>
                  <Ionicons name='notifications-outline' color="black" size={22}></Ionicons>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={DashboardStyle.searchCont}>
            <View style={DashboardStyle.searchInnerCont}>
              <View style={DashboardStyle.searchIconOneCont}>
                <View style={DashboardStyle.seacrhIconOneInnerCont}>
                  <Feather name='search' size={20} color='rgba(0, 0, 0, 0.4)'></Feather>
                </View>
              </View>
              <View style={DashboardStyle.searchTextInputCont}>
                <TextInput placeholder='Search Doctor' maxLength={20} style={{fontFamily: 'Poppins-Medium', fontSize: 15, color: 'rgba(0, 0, 0, 0.4)', marginBottom: -5}}></TextInput>
              </View>
              <View style={DashboardStyle.searchIconTwoCont}>
                <TouchableOpacity style={DashboardStyle.searchIconTwoTouchable}>
                  <SimpleLineIcons name='equalizer' color='rgba(0, 0, 0, 0.7)' size={15}></SimpleLineIcons>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <LinearGradient style={DashboardStyle.dashCard} colors={['rgba(195, 140, 222, 0.4)', 'rgba(195, 140, 222, 0.6)', 'rgba(195, 140, 222,1)']} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} locations={[0.1, 0.3, 0.9]}>
            <View style={DashboardStyle.leftCont}>
              <View style={DashboardStyle.leftContInnerCont}>
                <View style={DashboardStyle.leftContFirstHeading}>
                  <Text style={DashboardStyle.leftContFirstHeadingText}>
                    Healthy or expensive
                  </Text>
                </View>
                <View style={DashboardStyle.leftContSecondHeading}>
                  <Text style={DashboardStyle.leftContSecondHeadingText}>
                    Protect your family from virus before it's too late
                  </Text>
                </View>
              </View>
              <View>
                <Image style={DashboardStyle.dashContImage} source={require('../assets/images/doctorsInfo.png')} resizeMode="cover"></Image>
              </View>
            </View>
          </LinearGradient>
          <DoctorBar One={'Categories'} Two={"See all"}></DoctorBar>

          <View style={{width: wp('90'), height: hp('15'), margin:15, alignSelf: 'center'}}>
            <View style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
              <DoctorCategories text={'Urology'} source={require('../assets/images/urology.png')} color={'rgba(195, 140, 222, 0.5)'} boxWidth={wp('18')} boxHeight={wp('18')} boxRadius={wp('5')} marginRight={wp('5')} marginBottom={wp('4')}/>
              <DoctorCategories text={'Radiology'} source={require('../assets/images/radiology.png')} color={'rgba(247, 106, 106, 0.5)'} boxWidth={wp('18')} boxHeight={wp('18')} boxRadius={wp('5')} marginRight={wp('5')} marginBottom={wp('4')}/>
              <DoctorCategories text={'Cardiology'} source={require('../assets/images/cardiology.png')} color={'rgba(134, 247, 194, 0.4)'} boxWidth={wp('18')} boxHeight={wp('18')} boxRadius={wp('5')} marginRight={wp('5')} marginBottom={wp('4')}/>
            </View>
          </View>

          <DoctorBar One={'Nearby Doctor'} Two={"See all"}></DoctorBar>

          <View style={{width: wp('90')}}>
            <View style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
            <DoctorCard color={'rgba(195, 140, 222, 0.5)'} source={require('../assets/images/doctorsInfo.png')} name={'Dr. Amanda'} dept={'Dentist'} star={'4.5'} experience={'5 years'}/>
            <DoctorCard color={'rgba(247, 106, 106, 0.4)'} source={require('../assets/images/drOmer.png')} name={'Dr. Omer'} dept={'Urology'} star={'4.0'} experience={'2 years'}/>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
