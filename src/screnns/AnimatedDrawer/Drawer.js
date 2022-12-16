import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColor';
import Dashboard from '../Dashboard/Dashboard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Drawer = () => {
  const navigation = useNavigation();

  const moveRight = useSharedValue(wp('0'));
  const scaling = useSharedValue(1);
  const moveRight1 = useSharedValue(wp('100'));
  const scaling1 = useSharedValue(1);

  const [showMenu, setShowMenu] = useState(false);
  const smallView = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: (scaling1.value = 0.68)},
        {translateX: (moveRight1.value = 205)},
      ],
    };
  });

  const largeView = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaling.value}, {translateX: moveRight.value}],
    };
  });

  const pressHandler = () => {
    if (scaling.value === 1) {
      moveRight.value = withTiming(220, {duration: 700});
      scaling.value = withTiming(0.8, {duration: 700});
      setShowMenu(true);
    } else {
      moveRight.value = withSpring(0, {stiffness: 150});
      scaling.value = withSpring(1, {stiffness: 150});
      setShowMenu(false);
    }
  };

  const data = [
    {title: 'My Profile', iconName: 'user-o', provider: FontAwesome},
    {title: 'History', iconName: 'clock', provider: Fontisto},
    {
      title: 'Notification',
      iconName: 'notifications-outline',
      provider: Ionicons,
    },
    {
      title: 'Health Shop',
      iconName: 'cart-outline',
      provider: MaterialCommunityIcons,
    },
    {title: 'Setting', iconName: 'setting', provider: AntDesign},
  ];

  return (
    <Animated.View style={{flex: 1, backgroundColor: '#c28cde'}}>
      <Animated.View style={{flex: 1, backgroundColor: '#c28cde'}}>
        <TouchableOpacity
          style={{
            width: wp('16'),
            height: wp('16'),
            borderRadius: wp('8'),
            backgroundColor: 'black',
            marginLeft: wp('5'),
            marginTop: wp('15'),
          }}
          onPress={pressHandler}>
          <Image
            style={{width: wp('16'), height: wp('16'), borderRadius: wp('8')}}
            source={require('../../assets/images/profile.jpg')}></Image>
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: wp('5'),
            marginTop: wp('2'),
            fontFamily: 'Poppins-Bold',
            fontSize: wp('5'),
            color: AppColor.white,
          }}>
          Dara Amanda
        </Text>
        <Text
          style={{
            marginLeft: wp('5'),
            fontFamily: 'Poppins-Light',
            fontSize: wp('3.5'),
            color: AppColor.white,
          }}>
          CEO BTS
        </Text>

        <View
          style={{
            marginTop: wp('15'),
            marginLeft: wp('5'),
          }}>
          <View
            style={{
              width: wp('60'),
              marginBottom: wp('8'),
              flexDirection: 'row',
            }}>
            <FontAwesome
              name={"user-o"}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={{width: wp('50')}}
              onPress={() => navigation.navigate('MyProfile')}>
              <Text
                style={{
                  marginLeft: wp('3'),
                  fontFamily: 'Poppins-Medium',
                  fontSize: wp('3.7'),
                  color: 'white',
                }}>
                My Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: wp("-2"),
            marginLeft: wp('5'),
          }}>
          <View
            style={{
              width: wp('60'),
              marginBottom: wp('8'),
              flexDirection: 'row',
            }}>
            <MaterialCommunityIcons
              name={"calendar"}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={{width: wp('50')}}
              onPress={() => navigation.navigate('MyAppointment')}>
              <Text
                style={{
                  marginLeft: wp('2.7'),
                  fontFamily: 'Poppins-Medium',
                  fontSize: wp('3.7'),
                  color: 'white',
                }}>
                Appointment
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: wp("-2"),
            marginLeft: wp('5'),
          }}>
          <View
            style={{
              width: wp('60'),
              marginBottom: wp('8'),
              flexDirection: 'row',
            }}>
            <Ionicons
              name={"notifications-outline"}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={{width: wp('50')}}
              onPress={() => navigation.navigate('Notifications')}>
              <Text
                style={{
                  marginLeft: wp('3'),
                  fontFamily: 'Poppins-Medium',
                  fontSize: wp('3.7'),
                  color: 'white',
                }}>
                Notification
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: wp("-2"),
            marginLeft: wp('5'),
          }}>
          <View
            style={{
              width: wp('60'),
              marginBottom: wp('8'),
              flexDirection: 'row',
            }}>
            <MaterialIcons
              name={"message"}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={{width: wp('50')}}
              onPress={() => navigation.navigate('Message')}>
              <Text
                style={{
                  marginLeft: wp('3'),
                  fontFamily: 'Poppins-Medium',
                  fontSize: wp('3.7'),
                  color: 'white',
                }}>
                Message
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginTop: wp("-2"),
            marginLeft: wp('5'),
          }}>
          <View
            style={{
              width: wp('60'),
              marginBottom: wp('8'),
              flexDirection: 'row',
            }}>
            <AntDesign
              name={"setting"}
              size={wp('5')}
              color={AppColor.white}
            />
            <TouchableOpacity
              style={{width: wp('50')}}
              onPress={() => navigation.navigate('MyProfile')}>
              <Text
                style={{
                  marginLeft: wp('3'),
                  fontFamily: 'Poppins-Medium',
                  fontSize: wp('3.7'),
                  color: 'white',
                }}>
                Setting
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            marginLeft: wp('5'),
            marginBottom: wp('15'),
          }}>
          <MaterialIcons name="logout" size={wp('5')} color={AppColor.white} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('LogIn');
            }}>
            <Text
              style={{
                marginLeft: wp('3'),
                fontFamily: 'Poppins-Medium',
                fontSize: wp('3.7'),
                color: AppColor.white,
              }}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: 'rgba(255,255,255,0.3)',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            borderRadius: showMenu ? wp('10') : 0,
          },
          smallView,
        ]}></Animated.View>

      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: AppColor.whiteOpacity,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            borderRadius: showMenu ? wp('10') : 0,
          },
          largeView,
        ]}>
        <Dashboard onPress={pressHandler}></Dashboard>
      </Animated.View>
    </Animated.View>
  );
};

export default Drawer;
