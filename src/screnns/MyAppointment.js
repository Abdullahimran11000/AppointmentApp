import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {AppointmentStyle} from '../assets/styles/AnimatedDrawerStyle/AppointmentStyle';
import CompleteAppointmentCard from '../components/Appointments/CompleteAppointmentCard';
import UpcomingAppointmentCard from '../components/Appointments/UpcomingAppointment';
import CancelledAppointmentCard from '../components/Appointments/Cancelled';
import BackButton from '../components/ScrennHeader/BackButton';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import {AppColor} from '../assets/colors/AppColor';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppContext from '../assets/context/AppContext';

const MyAppointment = ({navigation}) => {
  const {storeCallStatus} = useContext(AppContext);
  const [completeButton, setCompeletButton] = useState(true);
  const [upcomingButton, setUpcomingButton] = useState(false);
  const [cancellButton, setCancellButton] = useState(false);

  const [showCompletedAppointments, setShowCompletedAppointments] =
    useState(true);

  const [showUpcomingAppointments, setShowUpcomingAppointments] =
    useState(false);

  const [showCancelledAppointments, setShowCancelledAppointments] =
    useState(false);

  const [CompeletdAppointmentsInfo, setCompletedAppointmentInfo] = useState([
    {
      id: 1,
      name: 'Dr.Amanda Johnson',
      deptName: 'Dentist Specialist',
      date: '22 March 2022',
      time: '10:30 pm',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Dr. Sharina james',
      deptName: 'Urology Specialist',
      date: '24 March 2022',
      time: '10:30 pm',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Dr.Elizbeth',
      deptName: 'Cardiology Specialist',
      date: '22 March 2022',
      time: '10:30 pm',
      appDestination: 'Video',
    },
  ]);

  const loadAllCompletedAppointmentInfo = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos').then(
      resp => setCompletedAppointmentInfo(resp.json()),
    );
  };

  const [UpcomingAppointmentsInfo, setUpcomingAppointmentInfo] = useState([
    {
      id: 1,
      name: 'Dr.jhonson',
      deptName: 'Dentist Specialist',
      date: '22 March 2022',
      time: '10:30 pm',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Dr.james',
      deptName: 'Urology Specialist',
      date: '24 March 2022',
      time: '10:30 pm',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Dr.Alex',
      deptName: 'Cardiology Specialist',
      date: '22 March 2022',
      time: '10:30 pm',
      appDestination: 'Video',
    },
  ]);

  const loadAllUpcomingAppointmentInfo = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos').then(
      resp => setUpcomingAppointmentInfo(resp.json()),
    );
  };

  const [CancelledAppointmentsInfo, setCancelledAppointmentInfo] = useState([
    {
      id: 1,
      name: 'Dr.Richie',
      deptName: 'Dentist Specialist',
      date: '22 March 2022',
      time: '10:30 pm',
      appDestination: 'Hospital',
    },
    {
      id: 2,
      name: 'Dr.Clark',
      deptName: 'Urology Specialist',
      date: '24 March 2022',
      time: '10:30 pm',
      appDestination: 'Chat',
    },
    {
      id: 3,
      name: 'Dr.James Bhatti',
      deptName: 'Cardiology Specialist',
      date: '22 March 2022',
      time: '10:30 pm',
      appDestination: 'Video',
    },
    {
      id: 4,
      name: 'Dr.James Bhatti',
      deptName: 'Cardiology Specialist',
      date: '22 March 2022',
      time: '10:30 pm',
      appDestination: 'Video',
    },
  ]);

  const loadAllCancelledAppointmentInfo = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos').then(
      resp => setCancelledAppointmentInfo(resp.json()),
    );
  };

  const renderItemCompeletedAppointments = ({item}) => (
    <CompleteAppointmentCard
      item={item}
      onPress={() => {
        if (item.appDestination === 'Chat') {
          navigation.navigate('Chat');
        } else if (item.appDestination === 'Video') {
          navigation.navigate('VideoCalling');
          storeCallStatus('Video');
        }
      }}
    />
  );

  const renderItemUpcomingAppointments = ({item}) => (
    <UpcomingAppointmentCard
      item={item}
      onPress={() => {
        if (item.appDestination === 'Chat') {
          navigation.navigate('Chat');
        } else if (item.appDestination === 'Video') {
          navigation.navigate('VideoCalling');
          storeCallStatus('Video');
        }
      }}
    />
  );

  const renderItemCancelledAppointments = ({item}) => (
    <CancelledAppointmentCard
      item={item}
      onPress={() => {
        if (item.appDestination === 'Chat') {
          navigation.navigate('Chat');
        } else if (item.appDestination === 'Video') {
          navigation.navigate('VideoCalling');
          storeCallStatus('Video');
        }
      }}
    />
  );

  return (
    <SafeAreaView style={{flex: 10, backgroundColor: AppColor.whiteShade}}>
      <ScrollView>
        <View style={{flex:1}}>
          <BackButton onPress={() => navigation.goBack()}>
            My Appointment
          </BackButton>
        </View>
        <View style={AppointmentStyle.opcaityView}>
          <Neomorph
            // inner={completeButton}
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: completeButton
                  ? AppColor.primary
                  : AppColor.whiteShade
              },
            ]}>
            <TouchableOpacity
              style={AppointmentStyle.opacityTouchableButton}
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
          </Neomorph>

          <Neomorph
            // inner={upcomingButton}
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: upcomingButton
                  ? AppColor.primary
                  : AppColor.whiteShade,
              },
            ]}>
            <TouchableOpacity
              style={AppointmentStyle.opacityTouchableButton}
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
          </Neomorph>

          <Neomorph
            // inner={cancellButton}
            style={[
              AppointmentStyle.opacityButton,
              { 
                backgroundColor: cancellButton
                  ? AppColor.primary
                  : AppColor.whiteShade,
                  // 'rgba(207, 66, 195,0.2)'
              },
            ]}>
            <TouchableOpacity
              style={AppointmentStyle.opacityTouchableButton}
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
          </Neomorph>
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
