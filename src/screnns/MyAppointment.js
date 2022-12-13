import react, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppointmentStyle} from '../assets/styles/AppointmentStyle';
import moment from 'moment-timezone';
import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';
import {diff} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BackButton from './BackButton';
import {useNavigation} from '@react-navigation/native';

const MyAppointment = (props) => {
  const [showButton, setShowButton] = useState(false);
  //     var startTime = moment('1:00:00' ,'HH:mm:ss a');
  // var endTime = moment('2:00:00','HH:mm:ss a');
  // var duration =moment.duration(endTime.diff(startTime))
  // var hours = parseInt(duration.asHours());
  // console.log(hours)

  // var currentTime =moment().format('hh:mm:ss a');
  // var startTime = moment('1:08:07 am', 'hh:mm:ss a');

  // console.log(currentTime.toString() === startTime.toString())

  const currentTime = moment().format('hh:mm a');
  // const currentdate = moment().format('yyyy-MM-DD');

  //   if (currentTime < '01:00 pm') {
  //     console.log(
  //       `Your current time is ${currentTime}  and your appointment on this time '01:00 pm.`,
  //     );
  //   } else {
  //     console.log('Your appointment time is out.');
  //   }

  // if
  // (currentDate.getTime() > startDate.getTime()) {

  //   console.log('you want to cancel your appointment.');
  // }
  // else {
  //      (currentDate.getTime() < startDate.getTime())
  //     console.log('your appointment time is out .');
  // }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <BackButton onPress={() => props.navigation.goBack()}>
          My Appointment
        </BackButton>

        <View style={AppointmentStyle.opcaityView}>
          <TouchableOpacity style={AppointmentStyle.opacityButton}>
            <Text style={AppointmentStyle.buttonText}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AppointmentStyle.opacityButton}>
            <Text style={AppointmentStyle.buttonText}>Compeleted</Text>
          </TouchableOpacity>

          <TouchableOpacity style={AppointmentStyle.opacityButton}>
            <Text style={AppointmentStyle.buttonText}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        <View style={AppointmentStyle.doctorCard}>
          <View
            style={{
              borderRadius: widthPercentageToDP('10'),

              width: widthPercentageToDP('20'),
              height: widthPercentageToDP('20'),
              marginLeft: 20,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={AppointmentStyle.doctorImage}
              source={require('../assets/images/drOmer.png')}></Image>
          </View>

          <View
            style={{
              marginHorizontal: widthPercentageToDP(30),
              marginVertical: widthPercentageToDP(-18),
            }}>
            <Text style={AppointmentStyle.doctorText}>Dr.Adam Jordan</Text>
            <View>
              <Text>Dentist Specialist</Text>
            </View>
          </View>
          <View style={AppointmentStyle.footerView}>
            <Icon size={12} name="calendar"></Icon>
            <Text style={AppointmentStyle.footerText}>22 March 2022</Text>

            <Icon size={12} name="clock-o"></Icon>
            <Text style={AppointmentStyle.footerText}>10:30pm</Text>

            <Icon size={12} name="hospital-o"></Icon>
            <Text style={AppointmentStyle.footerText}>hospital</Text>
          </View>
        </View>

        <View
          style={{
            width: wp(95),
            height: showButton ? hp(30) : hp(22),
            margin: 10,
            marginTop: 2,
            borderRadius: 30,
            backgroundColor: 'rgba(0,0,0,0.02)',
          }}>
          <View
            style={{
              borderRadius: widthPercentageToDP('10'),

              width: widthPercentageToDP('20'),
              height: widthPercentageToDP('20'),
              marginLeft: 20,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={AppointmentStyle.doctorImage}
              source={require('../assets/images/doctorsInfo.png')}></Image>
          </View>

          <View
            style={{
              marginHorizontal: widthPercentageToDP(28),
              marginVertical: widthPercentageToDP(-17),
              marginLeft: widthPercentageToDP(30),
            }}>
            <View
              style={{position: 'absolute', right: widthPercentageToDP('-20')}}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: widthPercentageToDP('6'),
                  height: widthPercentageToDP('6'),
                  borderRadius: widthPercentageToDP('6'),
                  backgroundColor: 'rgba(0,0,0,0.1)',
                }}
                onPress={() => setShowButton(!showButton)}>
                <Icon name="angle-down" size={15}></Icon>
              </TouchableOpacity>
            </View>
            <Text style={AppointmentStyle.doctorText}>Dr.Elisbeth</Text>

            <View>
              <Text>Neurology Specialist</Text>
            </View>
          </View>

          <View style={AppointmentStyle.secondFooterView}>
            <Icon size={12} name="calendar"></Icon>
            <Text style={AppointmentStyle.secondDoctorText}>23 March 2022</Text>

            <Icon size={12} name="clock-o"></Icon>
            <Text style={AppointmentStyle.secondDoctorText}>10:30pm</Text>

            <Icon size={12} name="wechat"></Icon>
            <Text style={AppointmentStyle.secondDoctorText}>Chat</Text>
          </View>
          {showButton
            ? console.log('Wake up!')
            : console.log('I am on sleep mode')}
          {showButton ? (
            <View style={AppointmentStyle.footerOpcaityView}>
              <TouchableOpacity style={AppointmentStyle.footerOpacityButton}>
                <Text style={AppointmentStyle.footerButtonText}>cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={AppointmentStyle.footerOpacityButton}
                onPress={() => {}}>
                <Text style={AppointmentStyle.footerButtonText}>
                  Reshcedule
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            ''
          )}
        </View>

        <View style={AppointmentStyle.thirdDoctorCard}>
          <View
            style={{
              borderRadius: widthPercentageToDP('10'),

              width: widthPercentageToDP('20'),
              height: widthPercentageToDP('20'),
              marginLeft: 20,
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={AppointmentStyle.thirdDoctorImage}
              source={require('../assets/images/thirddoctor.png')}></Image>
          </View>

          <View
            style={{
              marginHorizontal: widthPercentageToDP(30),
              marginVertical: widthPercentageToDP(-18),
            }}>
            <Text style={AppointmentStyle.doctorText}>Dr.David</Text>
            <View>
              <Text>Dentist Specialist</Text>
            </View>
          </View>
          <View style={AppointmentStyle.footerView}>
            <Icon size={12} name="calendar"></Icon>
            <Text style={AppointmentStyle.footerText}>22 March 2022</Text>
            <Icon size={12} name="clock-o"></Icon>
            <Text style={AppointmentStyle.footerText}>10:30pm</Text>
            <Icon size={12} name="phone"></Icon>
            <Text style={AppointmentStyle.footerText}>call</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyAppointment;
