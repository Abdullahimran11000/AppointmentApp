import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import Modal from 'react-native-modal';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CalendarPicker from 'react-native-calendar-picker';
import {ScheduleStyle} from '../../assets/styles/DashboardStyle/ScheduleStyle';
import BackButton from '../ScrennHeader/BackButton';
import {AppColor} from '../../assets/colors/AppColor';
import Icon from 'react-native-vector-icons/AntDesign';
import NeoButton from '../../components/NeoMorphButton/NeoButton';

const Schedule = props => {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState('black');
  const [backColor, setBackColor] = useState('#E8E4E4');
  const colorHandler = () => {
    if (color === 'black' && backColor === '#E8E4E4') {
      setColor('white');
      setBackColor('#F9947F');
    } else {
      setColor('black');
      setBackColor('#E8E4E4');
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'black', height: hp('100')}}>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <BackButton onPress={() => props.navigation.goBack()}>
            Schedule
          </BackButton>
          <View style={ScheduleStyle.calenderView}>
            <CalendarPicker
              dayShape="circle"
              selectedDayTextColor="white"
              textStyle={{
                fontFamily: 'Poppins-Light',
              }}
              customDatesStyles={{
                fontFamily: 'Poppins-Medium',
              }}
              selectedDayColor={'#c8a7f2'}
              showDayStragglers={true}
              scrollable={true}
              monthTitleStyle={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: 17,
              }}
              yearTitleStyle={{
                fontFamily: 'Poppins-SemiBold',
              }}
              nextTitle={<Icon name="forward" size={20} />}
              nextTitleStyle={
                (style = {
                  color: AppColor.railBorderColor,
                })
              }
              previousTitle={<Icon name="banckward" size={20} />}
              previousTitleStyle={
                (style = {
                  color: AppColor.railBorderColor,
                })
              }
            />
          </View>
          <View style={{width: wp(100), alignSelf: 'center'}}>
            <Text style={ScheduleStyle.headingFirst}>Available Time</Text>
          </View>
          <View style={ScheduleStyle.viewFirst}>
            <TouchableOpacity onPress={colorHandler}>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={20}
                justifyContent={'center'}
                marginLeft={wp('8')}>
                <Text style={ScheduleStyle.buttonsTextRow1}>08:00 am</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={20}
                justifyContent={'center'}
                marginLeft={wp('8')}>
                <Text style={ScheduleStyle.buttonsTextRow1}>10:00 am</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: wp(8)}}>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={20}
                justifyContent={'center'}
                marginLeft={wp('8')}>
                <Text style={ScheduleStyle.buttonsTextRow1}>14:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={ScheduleStyle.row2MainView}>
            <TouchableOpacity>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={wp(20)}
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow2}>16:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={wp(20)}
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow2}>18:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: wp(8)}}>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={wp(20)}
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={wp(9)}>
                <Text style={ScheduleStyle.buttonsTextRow2}>20:00 pm</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={ScheduleStyle.headingsecond}>Appointment Details</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              top: hp(2),
              width: wp(100),
              alignSelf: 'center',
            }}>
            <TouchableOpacity>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={wp(20)}
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Hospital</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={wp(20)}
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Chat</Text>
              </NeoButton>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: wp(8)}}>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={wp(20)}
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={wp(8.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Call</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View
            style={{width: wp(100), alignSelf: 'center', marginTop: hp(4.5)}}>
            <TouchableOpacity
              onPress={colorHandler}
              style={{marginRight: wp(8)}}>
              <NeoButton
                width={wp('27.5')}
                height={hp('4')}
                backgroundColor={'#E8E4E4'}
                borderRadius={wp(20)}
                justifyContent={'center'}
                alignItems={'center'}
                marginLeft={wp(4.5)}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Call</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', top: hp(5), height: hp(15)}}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}>
              <NeoButton
                width={wp('90')}
                height={hp('7')}
                borderRadius={wp('10')}
                backgroundColor={AppColor.primary}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  Book Appointment
                </Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
        {showModal ? (
          <View style={ScheduleStyle.modalContainer}>
            <Modal
              visible={showModal}
              transparent={true}
              onBackdropPress={() => setShowModal(false)}>
              <View style={ScheduleStyle.modal}>
                <Neomorph
                  // inner
                  style={{
                    width: wp('55'),
                    height: wp('55'),
                    borderRadius:wp('55'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: AppColor.whiteShade,
                    shadowRadius: 5,
                  }}>
                  <Neomorph
                    inner
                    style={{
                      width: wp('45'),
                      height: wp('45'),
                      borderRadius:wp('45'),
                      backgroundColor: AppColor.whiteShade,
                      shadowRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Lottie
                      source={require('../../assets/animations/schedule.json')}
                      style={{
                        width: wp(60),
                        height: wp(60),
                        // borderRadius: wp('50'),
                      }}
                      autoPlay
                      // backgroundColor={AppColor.red}
                    />
                   </Neomorph>
                </Neomorph>
                <View style={{width: wp('50')}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Bold',
                      textAlign: 'center',
                      color: 'black',
                      marginTop: hp(4),
                    }}>
                    Your appointment has been created
                  </Text>
                </View>
                <View style={{marginTop: hp(5), width: wp('75')}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      fontSize: 12,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    Your appointment with Dr. Mazhar Salahudiin moak was made on
                    wednesday,March 22 at 16:02 pm
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    alignItems: 'center',
                    marginVertical: hp(3),
                  }}>
                  <TouchableOpacity onPress={() => setShowModal(false)}>
                    <NeoButton
                      width={wp(70)}
                      height={hp(6.5)}
                      backgroundColor={'#c28cde'}
                      borderRadius={30}
                      justifyContent={'center'}
                      alignItems={'center'}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        Done
                      </Text>
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
