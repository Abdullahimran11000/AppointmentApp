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
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DashboardStyle} from '../assets/styles/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DoctorBar from './DoctorBar';
import DoctorCategories from './DoctorCategories';

const Dashboard = props => {
  const [fill, setFill] = useState('hearto');
  const [color, setColor] = useState('#FFFFFF');

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
              <DoctorCategories text={'Urology'} source={require('../assets/images/urology.png')} color={'rgba(195, 140, 222, 0.5)'}/>
              <DoctorCategories marginLeft={10} text={'Radiology'} source={require('../assets/images/radiology.png')} color={'rgba(195, 140, 222, 0.8)'}/>
            </View>
          </View>


          <DoctorBar One={'Nearby Doctor'} Two={"See all"}></DoctorBar>

          <View style={{width: wp('35'), height: hp('50'), margin:15}}>
            <LinearGradient colors={['rgba(195, 140, 222, 0.8)', 'rgba(195, 140, 222, 0.8)', 'rgba(195, 140, 222, 0.8)']} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} locations={[0.1, 0.3, 0.9]} style={DashboardStyle.doctorCard}>
              <View>
                <View style={DashboardStyle.doctorCont}>
                  <ImageBackground style={DashboardStyle.doctorCardImage} source={require('../assets/images/doctorsInfo.png')} resizeMode="cover">
                    <View style={DashboardStyle.doctorHeaderCont}>
                      <View style={DashboardStyle.doctorHeaderContInnerCont}>
                        <TouchableOpacity style={DashboardStyle.doctorHeaderContTouchable}
                          onPress={() => {
                            if (fill === 'heart') {
                              setFill('hearto');
                              setColor('#FFFFFF');
                            } else {
                              setFill('heart');
                              setColor('#f56262');
                            }
                          }}>
                          <AntDesign name={fill} size={15} color={color}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </LinearGradient>
            <View style={DashboardStyle.doctorLowerContFirstHeading}>
              <Text style={DashboardStyle.doctorLowerContFirstHeadingText}>Dr. Amanda</Text>
            </View>
            <View>
              <Text style={DashboardStyle.doctorLowerContSecondHeadingText}>Dentist</Text>
            </View>
            <View>
              <View style={DashboardStyle.doctorLowerFlexView}>
                <View style={DashboardStyle.doctorLowerFlexTouchableView}>
                  <TouchableOpacity><AntDesign name='star' size={15} color="#FFD700"/></TouchableOpacity>
                </View>
                <View style={DashboardStyle.doctorLowerFlexTextOneView}>
                  <Text style={DashboardStyle.doctorLowerFlexTextOne}>4.5</Text>
                </View>
                <View style={DashboardStyle.doctorLowerFlexIconView}>
                  <MaterialIcons name="work" size={15} color= 'rgba(0, 0, 0, 1)'></MaterialIcons>
                </View>
                <View style={DashboardStyle.doctorLowerFlexTextTwoView}>
                  <Text style={DashboardStyle.doctorLowerFlexTextTwo}>7 years</Text>
                </View>
              </View>
            </View>
          </View>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
