import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import Modal from 'react-native-modal';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CalendarPicker from 'react-native-calendar-picker';
import {ScheduleStyle} from '../assets/styles/DashboardStyle/ScheduleStyle';
import BackButton from '../components/ScrennHeader/BackButton';
import {AppColor} from '../assets/colors/AppColor';
import Icon from 'react-native-vector-icons/AntDesign';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import TimingFlatList from '../components/TimingFlatList/TimingFlatList';
import moment from 'moment';

const Schedule = ({navigation}) => {
  const timingData = [
    { id: 1, start_time:'8:00 am', end_time:'8:20 am'},
    { id: 2, start_time:'8:00 am', end_time:'8:20 am'},
    { id: 3, start_time:'8:00 am', end_time:'8:20 am'},
    { id: 4, start_time:'8:00 am', end_time:'8:20 am'},
    { id: 5, start_time:'8:00 am', end_time:'8:20 am'},
    { id: 5, start_time:'8:00 am', end_time:'8:20 am'},
    { id: 5, start_time:'8:00 am', end_time:'8:20 am'},
]

  // const appointmentDetailData = [
  //   { id: 1, appointmentData:'Hospital'},
  //   { id: 2, appointmentData:'Chat'},
  //   { id: 3, appointmentData:'Call'},
  //   { id: 4, appointmentData:'Video Call'},
  // ]
  const [showModal, setShowModal] = useState(false);
  // const [selectedDate, setSelectedDate] = useState();

  // const selectedCalenderDate = (date) => {
  //    setSelectedDate(moment(date).format('DD MMMM YYYY'))
  // }
  return (
    <SafeAreaView style={{flex: 1, height: hp('100'),backgroundColor: AppColor.whiteShade,flex:10}}>
      <ScrollView>
        <View style={{flex:1}}>
          <BackButton onPress={() => navigation.goBack()}>Schedule</BackButton>
        </View>
        <View style={{flex:9}}>
          <View style={ScheduleStyle.calenderView}>
            <CalendarPicker dayShape="circle" selectedDayTextColor="white"
              textStyle={{fontFamily: 'Poppins-Light',}}
              customDatesStyles={{fontFamily: 'Poppins-Medium'}}
              selectedDayColor={'#c8a7f2'}
              showDayStragglers={true}
              scrollable={true}
              monthTitleStyle={{ fontFamily: 'Poppins-SemiBold', fontSize: wp(5),}}
              yearTitleStyle={{fontFamily: 'Poppins-SemiBold',}}
              nextTitle={<Icon name="forward" size={wp('6')} />}
              nextTitleStyle={{color: AppColor.primary,}}
              previousTitle={<Icon name="banckward" size={wp('6')} />}
              previousTitleStyle={{color: AppColor.primary}}
              // onDateChange={(date) => {setSelectedDate(moment(date).format('DD MMMM YYYY'))}}
            />
          </View>
          <View style={ScheduleStyle.firstHeading}>
            <Text style={ScheduleStyle.headingFirst}>Available Time</Text>
          </View>
          <View style={{height:hp(20),top:hp(1)}}>
            <FlatList 
                data={timingData} 
                renderItem={TimingFlatList}  
                keyExtractor={item => item.id}
                numColumns={2}
                />
          </View>
          {/* <View>
            <Text style={ScheduleStyle.headingsecond}>Appointment Details</Text>
          </View>
          <View style={{height:hp(12),alignSelf:'center'}}>
            <FlatList 
                // style={{marginLeft:wp(3)}}
                data={appointmentDetailData} 
                renderItem={AppointmentDetailsFlatList}  
                keyExtractor={item => item.id}
                // numColumns={4}
                horizontal={true}
                showsHorizontalScrollIndicator={false}/>
          </View> */}
          <View style={ScheduleStyle.bookAppointmentButtonStyle}>
            <TouchableOpacity onPress={() => {setShowModal(true)}}>
              <NeoButton width={wp('90')} height={hp('7')} borderRadius={wp('10')} backgroundColor={AppColor.primary}>
                <Text style={ScheduleStyle.bookAppointmentButton}> Book Appointment</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
        {showModal ? (
          <View style={ScheduleStyle.modalContainer}>
            <Modal visible={showModal} transparent={true} onBackdropPress={() => setShowModal(false)}>
              <View style={ScheduleStyle.modal}>
                <Neomorph style={ScheduleStyle.lottyView}>
                  <Neomorph inner style={ScheduleStyle.lottyViewInner}>
                    <Lottie source={require('../assets/animations/schedule.json')}
                      style={{ width: wp(50), height: wp(50),}}
                      autoPlay/>
                   </Neomorph>
                </Neomorph>
                <View style={{width: wp('50')}}>
                  <Text style={ScheduleStyle.modalMiddleView}> Your appointment has been created </Text>
                </View>
                <View style={{marginTop: hp(5), width: wp('75')}}>
                  <Text style={ScheduleStyle.modalMiddleView2}>Your appointment with Dr. Mazhar Salahudiin moak was made on wednesday,March 22 at 16:02 pm</Text>
                </View>
                <View style={ScheduleStyle.modalButtonView}>
                  <TouchableOpacity onPress={() => navigation.navigate('Drawer')} onBackdropPress={() => setShowModal(false)}>
                    <NeoButton width={wp(70)} height={hp(6.5)} backgroundColor={AppColor.primary} borderRadius={30} justifyContent={'center'} alignItems={'center'}>
                      <Text style={ScheduleStyle.modalDoneButton}>Done</Text>
                    </NeoButton>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        ) : (
          ''
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Schedule;


// add two numbers in python