import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Animated
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DashboardStyle} from '../assets/styles/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import DoctorBar from './DoctorBar';
import DoctorCategories from './DoctorCategories';
import DoctorCard from './DoctorCard';
import { AppColor } from '../assets/colors/AppColor';
import { FlatList } from 'react-native-gesture-handler';

const Dashboard = props => {
  const navigation = useNavigation();
  const data= [
    {name: 'Dr. Amanda', dept: 'Dentist', star: "4.5", experience: '5 years', color: 'rgba(195, 140, 222, 0.5)', source: require('../assets/images/doctorsInfo.png')},
    {name: 'Dr. Omer', dept: 'Urology', star: "4.0", experience: '7 years', color: 'rgba(247, 106, 106, 0.4)', source: require('../assets/images/drOmer.png')},
    {name: 'Dr. Asnan', dept: 'Dentist', star: "3.5", experience: '10 years', color: 'rgba(195, 140, 222, 1)', source: require('../assets/images/doctorsInfo.png')},
    {name: 'Dr. Gough', dept: 'Dentist', star: "2.5", experience: '15 years', color: 'rgba(195, 140, 222, 0.1)', source: require('../assets/images/doctorsInfo.png')},
    {name: 'Dr. Abdullah', dept: 'Urology', star: "4.5", experience: '2 years', color: 'rgba(247, 106, 106, 0.4)', source: require('../assets/images/doctorsInfo.png')},
  ]

  const renderItem = ({item}) =>{
    return (
      <DoctorCard color={item.color} source={item.source} name={item.name} dept={item.dept} star={item.star} experience={item.experience} backColor={item.color} onPress={()=>{navigation.navigate("DoctorInfo" , {item: item})}}/>
    )
  }

  return (
    <SafeAreaView style={props.style}>
      <ScrollView>
        <View>
          <View style={DashboardStyle.headCont}>
            <View style={DashboardStyle.headContInnerCont}>
              <TouchableOpacity style={DashboardStyle.headContImageCont} onPress={props.onPress}>
                <Image style={DashboardStyle.headContImageStyle} source={require('../assets/images/selfieOne.jpg')} resizeMode='cover'></Image> 
              </TouchableOpacity>
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
                  <Feather name='search' size={20} color={AppColor.blackOpacity4}></Feather>
                </View>
              </View>
              <View style={DashboardStyle.searchTextInputCont}>
                <TextInput placeholder='Search Doctor' maxLength={20} style={{fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: AppColor.blackOpacity4, marginBottom: wp('-0.9')}}></TextInput>
              </View>
              <View style={DashboardStyle.searchIconTwoCont}>
                <TouchableOpacity style={DashboardStyle.searchIconTwoTouchable}>
                  <SimpleLineIcons name='equalizer' color= {AppColor.blackOpacity7} size={15}></SimpleLineIcons>
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
          
          <DoctorBar One={'Categories'} Two={"See all"} onPress={()=>navigation.navigate('DoctorDepartment')}></DoctorBar>

          <View style={{width: wp('90'), height: hp('15'), margin: wp('4.5'), alignSelf: 'center'}}>
            <View style={{display: 'flex', flex: 1, flexDirection: 'row'}}>
              <DoctorCategories text={'Urology'} source={require('../assets/images/urology.png')} color={'rgba(195, 140, 222, 0.5)'} boxWidth={wp('18')} boxHeight={wp('18')} boxRadius={wp('5')} marginRight={wp('5')} marginBottom={wp('4')}/>
              <DoctorCategories text={'Radiology'} source={require('../assets/images/radiology.png')} color={'rgba(247, 106, 106, 0.5)'} boxWidth={wp('18')} boxHeight={wp('18')} boxRadius={wp('5')} marginRight={wp('5')} marginBottom={wp('4')}/>
              <DoctorCategories text={'Cardiology'} source={require('../assets/images/cardiology.png')} color={'rgba(134, 247, 194, 0.4)'} boxWidth={wp('18')} boxHeight={wp('18')} boxRadius={wp('5')} marginRight={wp('5')} marginBottom={wp('4')}/>
            </View>
          </View>

          <DoctorBar One={'Nearby Doctor'} Two={"See all"} onPress={()=> navigation.navigate('DoctorNearby')}></DoctorBar>

          
          {/* <View style={{display: 'flex', flex: 1, flexDirection: 'row', width: wp('90'), alignSelf: 'center'}}>
            <DoctorCard color={'rgba(195, 140, 222, 0.5)'} source={require('../assets/images/doctorsInfo.png')} name={'Dr. Amanda'} dept={'Dentist'} star={'4.5'} experience={'5 years'} onPress={()=> navigation.navigate('DoctorInfo')}/>
            <DoctorCard color={'rgba(247, 106, 106, 0.4)'} source={require('../assets/images/drOmer.png')} name={'Dr. Omer'} dept={'Urology'} star={'4.0'} experience={'2 years'}/>
          </View> */}

          <View style={{marginLeft: wp("4.5")}}>
            <FlatList data={data} renderItem={renderItem} horizontal={true}>
            </FlatList>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
