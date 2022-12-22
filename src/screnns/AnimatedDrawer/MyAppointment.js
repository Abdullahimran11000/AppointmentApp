import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppointmentStyle} from '../../assets/styles/AnimatedDrawerStyle/AppointmentStyle';
import moment from 'moment-timezone';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useNavigation} from '@react-navigation/native';
import {keyExtractor} from 'react-native/Libraries/Lists/VirtualizeUtils';
import {style} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import {ForgotPasswordStyle} from '../assets/styles/ForgotPasswordStyle';
import CompleteAppointmentCard from '../../components/Appointments/CompleteAppointmentCard';
import UpcomingAppointmentCard from '../../components/Appointments/UpcomingAppointment';
import CancelledAppointmentCard from '../../components/Appointments/Cancelled';

const MyAppointment = props => {
  const [completeButton, setCompeletButton] = useState(false);
  const [upcomingButton, setUpcomingButton] = useState(false);
  const [cancellButton, setCancellButton] = useState(false);

  const [showCompletedAppointments, setShowCompletedAppointments] =
    useState(false);

  const [showUpcomingAppointments, setShowUpcomingAppointments] =
    useState(false);

  const [showCancelledAppointments, setShowCancelledAppointments] =
    useState(false);

  const CompeletdAppointmentsInfo = [
    {
      id: 1,
      name: 'Dr.Amanda Johnson',
      deptName: 'Dentist Specialist',
      date: '22 March 2022',
      time: '10;30 pm',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Dr. Sharina james',
      deptName: 'Urology Specialist',
      date: '24 March 2022',
      time: '10;30 pm',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Dr.Elizbeth',
      deptName: 'Cardiology Specialist',
      date: '22 March 2022',
      time: '10;30 pm',
      appDestination: 'Video',
    },
  ];

  const UpcomingAppointmentsInfo = [
    {
      id: 1,
      name: 'Dr.jhonson',
      deptName: 'Dentist Specialist',
      date: '22 March 2022',
      time: '10;30 pm',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Dr.james',
      deptName: 'Urology Specialist',
      date: '24 March 2022',
      time: '10;30 pm',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Dr.Alex',
      deptName: 'Cardiology Specialist',
      date: '22 March 2022',
      time: '10;30 pm',
      appDestination: 'Video',
    },
  ];

  const CancelledAppointmentsInfo = [
    {
      id: 1,
      name: 'Dr.Richie',
      deptName: 'Dentist Specialist',
      date: '22 March 2022',
      time: '10;30 pm',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Dr.Clark',
      deptName: 'Urology Specialist',
      date: '24 March 2022',
      time: '10;30 pm',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Dr.James Bhatti',
      deptName: 'Cardiology Specialist',
      date: '22 March 2022',
      time: '10;30 pm',
      appDestination: 'Video',
    },
  ];

  const renderItemCompeletedAppointments = ({item}) => (
    <CompleteAppointmentCard item={item} />
  );

  const renderItemUpcomingAppointments = ({item}) => (
    <UpcomingAppointmentCard item={item} />
  );

  const renderItemCancelledAppointments = ({item}) => (
    <CancelledAppointmentCard item={item} />
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        {/* <BackButton onPress={() => props.navigation.goBack()}>
          My Appointment
        </BackButton> */}

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Poppins-Bold', color: 'black'}}>
            My Appointment
          </Text>
        </View>

        <View style={AppointmentStyle.opcaityView}>
          <TouchableOpacity
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: completeButton
                  ? 'rgba(207, 66, 195,0.4)'
                  : 'white',
              },
            ]}
            onPress={() => {
              setCompeletButton(true);
              setShowCompletedAppointments(true);
              setShowUpcomingAppointments(false);
              setShowCancelledAppointments(false);
              setUpcomingButton(false);
              setCancellButton(false);
            }}>
            <Text style={AppointmentStyle.buttonText}>Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: upcomingButton
                  ? 'rgba(207, 66, 195,0.4)'
                  : 'white',
              },
            ]}
            onPress={() => {
              setUpcomingButton(true);
              setShowUpcomingAppointments(true);
              setShowCompletedAppointments(false);
              setShowCancelledAppointments(false);
              setCompeletButton(false);
              setCancellButton(false);
            }}>
            <Text style={AppointmentStyle.buttonText}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: cancellButton
                  ? 'rgba(207, 66, 195,0.4)'
                  : 'white',
              },
            ]}
            onPress={() => {
              setCancellButton(true);
              setShowCancelledAppointments(true);
              setUpcomingButton(false);
              setShowUpcomingAppointments(false);
              setShowCompletedAppointments(false);
              setCompeletButton(false);
            }}>
            <Text style={AppointmentStyle.buttonText}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        {showCompletedAppointments ? (
          <FlatList
            data={CompeletdAppointmentsInfo}
            renderItem={renderItemCompeletedAppointments}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}

        {showUpcomingAppointments ? (
          <FlatList
            data={UpcomingAppointmentsInfo}
            renderItem={renderItemUpcomingAppointments}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}

        {showCancelledAppointments ? (
          <FlatList
            data={CancelledAppointmentsInfo}
            renderItem={renderItemCancelledAppointments}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyAppointment;
