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
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  height: hp('4'),
                  width: wp(27.5),
                  marginLeft: wp(8),
                  borderRadius: 20,
                  justifyContent: 'center',
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow1}>08:00 am</Text>
              </Neomorph>
            </TouchableOpacity>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  height: hp('4'),
                  width: wp(27.5),
                  marginLeft: wp(8),
                  borderRadius: 20,
                  justifyContent: 'center',
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow1}>10:00 am</Text>
              </Neomorph>
            </TouchableOpacity>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  height: hp('4'),
                  width: wp(27.5),
                  marginRight: wp(8),
                  marginLeft: wp(8),
                  borderRadius: 20,
                  justifyContent: 'center',
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow1}>14:00 pm</Text>
              </Neomorph>
            </TouchableOpacity>
          </View>
          <View style={ScheduleStyle.row2MainView}>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  width: wp(27.5),
                  marginLeft: wp(8.5),
                  height: hp(4),
                  borderRadius: 20,
                  shadowRadius: '3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow2}>16:00 pm</Text>
              </Neomorph>
            </TouchableOpacity>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  width: wp(27.5),
                  marginLeft: wp(8.5),
                  height: hp(4),
                  borderRadius: 20,
                  shadowRadius: '3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow2}>18:00 pm</Text>
              </Neomorph>
            </TouchableOpacity>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  width: wp(27.5),
                  marginLeft: wp(8.5),
                  height: hp(4),
                  borderRadius: 20,
                  marginRight: wp(8.5),
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow2}>20:00 pm</Text>
              </Neomorph>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={ScheduleStyle.headingsecond}>Appointment Details</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
              width: wp(100),
              alignSelf: 'center',
            }}>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  width: wp(27.5),
                  marginLeft: wp(8.5),
                  height: hp(4),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 20,
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Hospital</Text>
              </Neomorph>
            </TouchableOpacity>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  width: wp(27.5),
                  marginLeft: wp(8.5),
                  height: hp(4),
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 3,
                  borderRadius: 20,
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Chat</Text>
              </Neomorph>
            </TouchableOpacity>
            <TouchableOpacity>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  width: wp(27.5),
                  marginLeft: wp(8.5),
                  height: hp(4),
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 3,
                  borderRadius: 20,
                  marginRight: wp(8.5),
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Call</Text>
              </Neomorph>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(100), alignSelf: 'center'}}>
            <TouchableOpacity onPress={colorHandler}>
              <Neomorph
                style={{
                  backgroundColor: '#E8E4E4',
                  width: wp(27.5),
                  marginLeft: wp(4.5),
                  height: hp(4),
                  borderRadius: 20,
                  marginTop: hp(2),
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginRight: wp(8.5),
                  shadowRadius: '3',
                }}>
                <Text style={ScheduleStyle.buttonsTextRow3}>Video Call</Text>
              </Neomorph>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', top: hp(5), height: hp(15)}}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}>
              <Neomorph
                style={{
                  width: wp(90),
                  height: hp('7'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 30,
                  backgroundColor: AppColor.primary,
                  shadowRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'Poppins-SemiBold',
                  }}>
                  Book Appointment
                </Text>
              </Neomorph>
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
                <Lottie
                  source={require('../../assets/animations/schedule.json')}
                  style={{width: wp(30), height: hp(30)}}
                  autoPlay
                />
                <View style={{width: wp('50')}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Bold',
                      textAlign: 'center',
                      color: 'black',
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
                    <Neomorph
                      style={{
                        height: hp(6.5),
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowRadius: '4',
                        width: wp(70),
                        borderRadius: 30,
                        backgroundColor: '#c28cde',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                          fontFamily: 'Poppins-SemiBold',
                        }}>
                        Done
                      </Text>
                    </Neomorph>
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
