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
import BackButton from './BackButton';
import {useNavigation} from '@react-navigation/native';
import {keyExtractor} from 'react-native/Libraries/Lists/VirtualizeUtils';
import {style} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import {ForgotPasswordStyle} from '../assets/styles/ForgotPasswordStyle';
import BackButton from '../ScrennHeader/BackButton';

const MyAppointment = props => {
  const [showButton, setShowButton] = useState(false);

  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [showCompletedAppointments, setShowCompletedAppointments] =
    useState(true);
  const [showUpcomingAppointments, setShowUpcomingAppointments] =
    useState(false);
  const [showCancelledAppointments, setShowCancelledgAppointments] =
    useState(false);

  const currentTime = moment().format('hh:mm a');

  const DoctorInfo = [
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

  const completedAppointments = [
    {id: 304, name: 'Appointment 1', date: '22 March 2022'},
    {id: 305, name: 'Appointment 2', date: '23 March 2022'},
    {id: 306, name: 'Appointment 3', date: '24 March 2022'},
  ];

  const upcomingAppointments = [
    {id: 307, name: 'Appointment 4', date: '25 March 2022'},
    {id: 308, name: 'Appointment 5', date: '26 March 2022'},
    {id: 309, name: 'Appointment 6', date: '27 March 2022'},
  ];

  const cancelledAppointments = [
    {id: 310, name: 'Appointment 8', date: '29 March 2022'},
    {id: 311, name: 'Appointment 9', date: '30 March 2022'},
    {id: 312, name: 'Appointment 10', date: '31 March 2022'},
  ];

  const renderItemCompeletedAppointments = ({item}) => (
    <View
      style={{
        width: wp(95),
        height: showButton ? hp(33) : hp(25),
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
          source={require('F:/Workspace_fyp/Workspace/ApointmentApp/src/assets/images/doctorsInfo.png')}></Image>
      </View>

      <View
        style={{
          marginHorizontal: widthPercentageToDP(28),
          marginVertical: widthPercentageToDP(-17),
          marginLeft: widthPercentageToDP(30),
        }}>
        <View style={{position: 'absolute', right: widthPercentageToDP('-20')}}>
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
        <Text style={AppointmentStyle.doctorText}>{item.name}</Text>

        <View>
          <Text>{item.deptName}</Text>
        </View>
      </View>

      <View style={AppointmentStyle.secondFooterView}>
        <Icon size={12} name="calendar"></Icon>
        <Text style={AppointmentStyle.secondDoctorText}>{item.date}</Text>

        <Icon size={12} name="clock-o"></Icon>
        <Text style={AppointmentStyle.secondDoctorText}>{item.time}</Text>

        <Icon size={12} name="wechat"></Icon>
        <Text style={AppointmentStyle.secondDoctorText}>
          {item.appDestination}
        </Text>
      </View>
      {showButton ? console.log('Wake up!') : console.log('I am on sleep mode')}
      {showButton ? (
        <View style={AppointmentStyle.footerOpcaityView}>
          <TouchableOpacity style={AppointmentStyle.footerOpacityButton}>
            <Text style={AppointmentStyle.footerButtonText}>cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={AppointmentStyle.footerOpacityButton}
            onPress={() => {}}>
            <Text style={AppointmentStyle.footerButtonText}>Reshcedule</Text>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </View>
  );

  const renderItemupcomingAppointments = ({item}) => (
    <View style={AppointmentStyle.doctorCard}>
      <View style={{marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
          {item.name}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
          id no.{item.id}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
          Upcoming on.{item.date}
        </Text>
      </View>
    </View>
  );

  const renderItemCancelledAppointments = ({item}) => (
    <View style={AppointmentStyle.doctorCard}>
      <View style={{marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
          {item.name}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
          id no.{item.id}
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
          Cancelled on.{item.date}
        </Text>
      </View>
    </View>
  );

  // const renderItem1 = ({item}) => (
  //   <View
  //     style={{
  //       width: wp(95),
  //       height: showButton ? hp(33) : hp(25),
  //       margin: 10,
  //       marginTop: 2,
  //       borderRadius: 30,
  //       backgroundColor: 'rgba(0,0,0,0.02)',
  //     }}>
  //     <View
  //       style={{
  //         borderRadius: widthPercentageToDP('10'),

  //         width: widthPercentageToDP('20'),
  //         height: widthPercentageToDP('20'),
  //         marginLeft: 20,
  //         marginTop: 20,
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //       }}>
  //       <Image
  //         style={AppointmentStyle.doctorImage}
  //         source={require('F:/Workspace_fyp/Workspace/ApointmentApp/src/assets/images/doctorsInfo.png')}></Image>
  //     </View>

  //     <View
  //       style={{
  //         marginHorizontal: widthPercentageToDP(28),
  //         marginVertical: widthPercentageToDP(-17),
  //         marginLeft: widthPercentageToDP(30),
  //       }}>
  //       <View style={{position: 'absolute', right: widthPercentageToDP('-20')}}>
  //         <TouchableOpacity
  //           style={{
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             width: widthPercentageToDP('6'),
  //             height: widthPercentageToDP('6'),
  //             borderRadius: widthPercentageToDP('6'),
  //             backgroundColor: 'rgba(0,0,0,0.1)',
  //           }}
  //           onPress={() => setShowButton(!showButton)}>
  //           <Icon name="angle-down" size={15}></Icon>
  //         </TouchableOpacity>
  //       </View>
  //       <Text style={AppointmentStyle.doctorText}>{item.name}</Text>

  //       <View>
  //         <Text>{item.deptName}</Text>
  //       </View>
  //     </View>

  //     <View style={AppointmentStyle.secondFooterView}>
  //       <Icon size={12} name="calendar"></Icon>
  //       <Text style={AppointmentStyle.secondDoctorText}>{item.date}</Text>

  //       <Icon size={12} name="clock-o"></Icon>
  //       <Text style={AppointmentStyle.secondDoctorText}>{item.time}</Text>

  //       <Icon size={12} name="wechat"></Icon>
  //       <Text style={AppointmentStyle.secondDoctorText}>
  //         {item.appDestination}
  //       </Text>
  //     </View>
  //     {showButton ? console.log('Wake up!') : console.log('I am on sleep mode')}
  //     {showButton ? (
  //       <View style={AppointmentStyle.footerOpcaityView}>
  //         <TouchableOpacity style={AppointmentStyle.footerOpacityButton}>
  //           <Text style={AppointmentStyle.footerButtonText}>cancel</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={AppointmentStyle.footerOpacityButton}
  //           onPress={() => {}}>
  //           <Text style={AppointmentStyle.footerButtonText}>Reshcedule</Text>
  //         </TouchableOpacity>
  //       </View>
  //     ) : (
  //       ''
  //     )}
  //   </View>
  // );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <BackButton onPress={() => props.navigation.goBack()}>
          My Appointment
        </BackButton>

        <View style={AppointmentStyle.opcaityView}>
          <TouchableOpacity
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: active ? 'rgba(207, 66, 195,0.4)' : 'white',
              },
            ]}
            onPress={() => {
              setActive(true);
              setActive2(false);
              setActive1(false);
              setShowCompletedAppointments(true);
              setShowUpcomingAppointments(false);
              setShowCancelledgAppointments(false);
            }}>
            <Text style={AppointmentStyle.buttonText}>Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: active1 ? 'rgba(207, 66, 195,0.4)' : 'white',
              },
            ]}
            onPress={() => {
              setActive(false);
              setActive1(true);
              setActive2(false);
              setShowUpcomingAppointments(true);
              setShowCompletedAppointments(false);
              setShowCancelledgAppointments(false);
            }}>
            <Text style={AppointmentStyle.buttonText}>Upcoming</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              AppointmentStyle.opacityButton,
              {
                backgroundColor: active2 ? 'rgba(207,66,195,0.4)' : 'white',
              },
            ]}
            onPress={() => {
              setActive(false);
              setActive1(false);
              setActive2(true);
              setShowCancelledgAppointments(true);
              setShowUpcomingAppointments(false);
              setShowCompletedAppointments(false);
            }}>
            <Text style={AppointmentStyle.buttonText}>Cancelled</Text>
          </TouchableOpacity>
        </View>

        {showCompletedAppointments ? (
          <FlatList
            data={DoctorInfo}
            renderItem={renderItemCompeletedAppointments}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}
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
              source={require('../../assets/images/drOmer.png')}></Image>
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
              source={require('../../assets/images/doctorsInfo.png')}></Image>
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

        {showUpcomingAppointments ? (
          <FlatList
            data={upcomingAppointments}
            renderItem={renderItemupcomingAppointments}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}

        {showCancelledAppointments ? (
          <FlatList
            data={cancelledAppointments}
            renderItem={renderItemCancelledAppointments}
            keyExtractor={item => item.id}
          />
        ) : (
          ''
        )}
        <View>
        <Image
              style={AppointmentStyle.thirdDoctorImage}
              source={require('../../assets/images/thirddoctor.png')}></Image>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyAppointment;
