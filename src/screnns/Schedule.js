import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import Modal from "react-native-modal"
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
import {Calendar} from 'react-native-calendars';
import BackButton from './BackButton';
import {SlideInUp} from 'react-native-reanimated';
import {
  black,
  transparent,
  white,
} from 'react-native-paper/lib/typescript/styles/colors';
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
          <BackButton onPress={() => props.navigation.goBack()}>Schedule</BackButton>
          
          <View style={{width: wp(100), marginTop: hp(1), height: hp(50), alignSelf: 'center'}}>
            <Calendar
              style={{borderRadius: 40}}
              enableSwipeMonths={true}
              theme={{indicatorColor: 'red'}}
            />
          </View>
          <View style={{width: wp(100), alignSelf: 'center'}}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                fontSize: 14,
                marginLeft: wp(5),
                marginTop: hp(5),
              }}>
              Available Time
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: hp(2),
              width: wp(100),
              alignSelf: 'center'
            }}>
            <TouchableOpacity
              onPress={colorHandler}
              style={{
                backgroundColor: backColor,
                width: wp(27.5),
                marginLeft: wp(8),
                borderRadius: 20,
                justifyContent: 'center',
              }}>
              <Text style={style.buttonsTextRow1}>08:00 am</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttons}>
              <Text style={style.buttonsTextRow1}>10:00 am</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonWithMarginRight}>
              <Text style={style.buttonsTextRow1}>14:00 pm</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
              width: wp(100),
              alignSelf: 'center'
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#E8E4E4',
                width: wp(27.5),
                marginLeft: wp(8.5),
                padding: 3,
                borderRadius: 20,
              }}>
              <Text style={style.buttonsTextRow2}>16:00 pm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#E8E4E4',
                width: wp(27.5),
                marginLeft: wp(8.5),
                padding: 3,
                borderRadius: 20,
              }}>
              <Text style={style.buttonsTextRow2}>18:00 pm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#E8E4E4',
                width: wp(27.5),
                marginLeft: wp(8.5),
                padding: 3,
                borderRadius: 20,
                marginRight: wp(8.5),
              }}>
              <Text style={style.buttonsTextRow2}>20:00 pm</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: 'black',
                width: wp(100),
                marginLeft: wp('10'),
                alignSelf: 'center',
                marginTop: 15,
              }}>
              Appointment Details
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 10,
              width: wp(100),
              alignSelf: 'center'
            }}>
            <TouchableOpacity style={style.buttonsOfAppointmentDetails}>
              <Text style={style.buttonsTextRow3}>Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.buttonsOfAppointmentDetails}>
              <Text style={style.buttonsTextRow3}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#E8E4E4',
                width: wp(27.5),
                marginLeft: wp(8.5),
                padding: 3,
                borderRadius: 20,
                marginRight: wp(8.5),
              }}>
              <Text style={style.buttonsTextRow3}>Call</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: wp(100),
              alignSelf: 'center'}}>
            <TouchableOpacity
              onPress={colorHandler}
              style={{
                backgroundColor: '#E8E4E4',
                width: wp(27.5),
                marginLeft: wp(4.5),
                padding: 3,
                borderRadius: 20,
                marginTop: hp(2),
                // marginRight: wp(8.5),
              }}>
              <Text style={style.buttonsTextRow3}>Video Call</Text>
            </TouchableOpacity>
          </View>
          <View style={{padding: 10, alignItems: 'center', marginVertical: 10}}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}
              style={{
                backgroundColor: 'red',
                padding: 10,
                width: wp(90),
                borderRadius: 30,
                backgroundColor: '#c28cde',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Book Appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {showModal ? (
          <View style={style.modalContainer}>
            <Modal
              visible={showModal}
              transparent={true}
              onBackdropPress={() => setShowModal(false)}>
              <View style={style.modal}>
                <Lottie
                  source={require('../assets/animations/bookApp.json')}
                  style={{width: wp(30), height: hp(30)}}
                  autoPlay
                />
                <View style={{width: wp('50')}}>
                  <Text
                    style={{fontFamily: 'Poppins-Bold', textAlign: 'center'}}>
                    Your appointment has been created
                  </Text>
                </View>
                <View style={{marginTop: hp(5), width: wp('75')}}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      fontSize: 12,
                      textAlign: 'center',
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
                  <TouchableOpacity
                    onPress={() => setShowModal(false)}
                    style={{
                      backgroundColor: 'red',
                      padding: 10,
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

const style = StyleSheet.create({
  buttons: {
    backgroundColor: '#E8E4E4',
    width: wp(27.5),
    marginLeft: wp(8),
    padding: 3,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonsTextRow1: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonsTextRow2: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonsTextRow3: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  buttonWithMarginRight: {
    backgroundColor: '#E8E4E4',
    width: wp(27.5),
    marginLeft: wp(8),
    padding: 3,
    borderRadius: 20,
    marginRight: wp(8),
  },
  buttonsOfAppointmentDetails: {
    backgroundColor: '#E8E4E4',
    width: wp(27.5),
    marginLeft: wp(8.5),
    padding: 3,
    borderRadius: 20,
  },
  modal: {
    width: wp(90),
    height: hp(80),
    overflow: 'hidden',
    borderRadius: wp('10'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});
