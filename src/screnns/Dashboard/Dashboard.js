import React from 'react';
import {  SafeAreaView,  ScrollView,  Text,  View,  Image,  TouchableOpacity,  TextInput,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {DashboardStyle} from '../../assets/styles/DashboardStyle/DashboardStyle';
import {  widthPercentageToDP as wp,  heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import DoctorBar from './DoctorBar';
import { AppColor } from '../../assets/colors/AppColor';
import CategoriesFlatList from '../CategoriesFlatlist/CategoriesFlatList';
import DoctorsFlatList from '../DcotorsFlatlist/DoctorsFlatList'
import Animated from 'react-native-reanimated';
import {Neomorph} from 'react-native-neomorph-shadows'

const Dashboard = props => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColor.whiteShade}}>
      <ScrollView>
        <Animated.View>
          <View style={DashboardStyle.headCont}>
            <View style={DashboardStyle.headContInnerCont}>
              <TouchableOpacity style={DashboardStyle.headContImageCont} onPress={props.onPress}>
                <Image style={DashboardStyle.headContImageStyle} source={require('../../assets/images/selfieOne.jpg')} resizeMode='cover'></Image> 
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
                  <Neomorph lightShadowColor={AppColor.white}  style={{width: wp('10'), height: wp('10'), shadowRadius: 4, borderRadius: wp('12'), backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'}}>
                    <Ionicons name='notifications-outline' color="black" size={wp('6')}></Ionicons>
                  </Neomorph>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={DashboardStyle.searchCont}>
            <View style={DashboardStyle.searchInnerCont}>
              <Neomorph inner lightShadowColor={AppColor.white} style={{marginLeft: wp("-25"), width:wp('65') , height:hp('6'), borderRadius: wp('6'), shadowRadius: 4, backgroundColor: AppColor.whiteShade,}}>
                <View style={DashboardStyle.seacrhIconOneInnerCont}>
                  <Feather name='search' size={wp('6')} color={AppColor.blackOpacity4}></Feather>
                </View>
                <View style={DashboardStyle.searchTextInputCont}>
                  <TextInput placeholder='Search Doctor' maxLength={20} style={{width: wp('50') , fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: AppColor.blackOpacity4, marginBottom: wp('-1.5')}}></TextInput>
                </View>
              </Neomorph>
              <View style={DashboardStyle.searchIconTwoCont}>
                <TouchableOpacity>
                  <Neomorph  lightShadowColor={AppColor.white}  style={{width: wp('10'), height: wp('10'), shadowRadius: 4, borderRadius: wp('12'), backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'}}>
                    <SimpleLineIcons name='equalizer' color= {AppColor.black} size={wp('4')}></SimpleLineIcons>
                  </Neomorph>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
          <Neomorph darkShadowColor={AppColor.black} style={{width: wp('90'), height: hp('25'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade , margin: wp('4')}}>
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
                  <TouchableOpacity  onPress={()=> navigation.navigate('Maps')}>
                    <Neomorph lightShadowColor={AppColor.whiteShade} darkShadowColor={AppColor.blackOpacity4} style={{marginTop: wp('8'), width: wp('22'), height: wp('8'), borderRadius: wp('5'), shadowRadius: 4, backgroundColor: 'rgba(195, 140, 222, 0.8)', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{fontFamily: "Poppins-Bold", fontSize: wp('3'), color: AppColor.white}}>Discover</Text>
                    </Neomorph>
                  </TouchableOpacity>
                </View>
                <View>
                  <Image style={DashboardStyle.dashContImage} source={require('../../assets/images/doctorsInfo.png')} resizeMode="cover"></Image>
                </View>
              </View>
            </LinearGradient>
          </Neomorph>
          
          
          <DoctorBar One={'Categories'} Two={"See all"} onPress={()=>navigation.navigate('DoctorDepartment')}></DoctorBar>

          <View style={{width: wp('100'), height: hp('22')}}>
            <CategoriesFlatList outerWidth={wp('20')} outerHeight={hp('17')} outerRadius={wp('7')} outerMargin={wp('5')} alignItems={'center'} justifyContent={'center'} innerWidth={wp('21')} innerHeight={wp('21')} innerRadius={wp('7')} boxWidth={wp('18')} boxHeight={wp('18')} boxRadius={wp('7')} textWidth={wp('24')} horizontal={true}></CategoriesFlatList>
          </View>

          <DoctorBar One={'Nearby Doctor'} Two={"See all"} onPress={()=> navigation.navigate('SearchDoctor')}></DoctorBar>
          
          <View style={{marginLeft: wp("4.5")}}>
            <DoctorsFlatList horizontal={true} marginRight={wp('5')}/>
          </View>
          
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
