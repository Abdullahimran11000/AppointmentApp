import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../assets/colors/AppColor';
import Dashboard from './Dashboard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Drawer = props => {
  const navigation = useNavigation();
  const [showMenu, setShowMenu] = useState(false);
  const [openDrawer , setOpenDrawer] = useState(false)
  const moveRight = useRef(new Animated.Value(1)).current;
  const scaling = useRef(new Animated.Value(0)).current;

  const animatedFun = () => {
    Animated.timing(scaling, {
      toValue: showMenu ? 1 : 0.8,
      duration: 100,
      useNativeDriver: true,
    }).start();
    Animated.timing(moveRight, {
      toValue: showMenu ? 0 : 220,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setShowMenu(!showMenu);
    setOpenDrawer(true)
  };

  const data = [
    {image: require('../assets/images/user.png'), title: 'My Profile', iconName: 'user-o', provider: FontAwesome},
    {image: require('../assets/images/history.png'), title: 'History', iconName: 'clock', provider: Fontisto},
    {image: require('../assets/images/notification.png'), title: 'Notification', iconName: 'notifications-outline', provider: Ionicons},
    {image: require('../assets/images/trolley.png'), title: 'Health Shop', iconName: 'cart-outline', provider: MaterialCommunityIcons},
    {image: require('../assets/images/settings.png'), title: 'Setting', iconName: 'setting', provider: AntDesign},
  ];

  return (
    <Animated.View style={{flex: 1, backgroundColor: '#c28cde'}}>
     

      <View style={{flex: 1, backgroundColor: '#c28cde'}}>
        <TouchableOpacity
          style={{
            width: wp('16'),
            height: wp('16'),
            borderRadius: wp('8'),
            backgroundColor: 'black',
            marginLeft: wp('5'),
            marginTop: wp('15'),
          }}
          onPress={animatedFun}>
          <Image
            style={{width: wp('16'), height: wp('16'), borderRadius: wp('8')}}
            source={require('../assets/images/profile.jpg')}></Image>
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

        <View style={{position: 'absolute', marginTop: wp('65')}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                style={{
                  marginLeft: wp('5'),
                }}>
                <View
                  style={{
                    width: wp('60'),
                    marginBottom: wp('8'),
                    flexDirection: 'row',
                  }}>
                    <item.provider name={item.iconName} size={wp('5')} color={AppColor.white}/>
                  <TouchableOpacity style={{width: wp('50')}} onPress={()=> navigation.navigate('MyProfile')}>
                    <Text
                      style={{
                        marginLeft: wp('3'),
                        fontFamily: 'Poppins-Medium',
                        fontSize: wp('3.7'),
                        color: 'white',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}></FlatList>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            marginLeft: wp('5'),
            marginBottom: wp('15'),
          }}>
          <MaterialIcons name="logout" size={wp("5")} color={AppColor.white}/>
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
      </View>

      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'rgba(255,255,255,0.3)',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          transform: [{scale: 0.68}, {translateX: 205}],
          borderRadius: showMenu ? wp('10') : 0,
        }}></Animated.View>

      <Animated.View
        style={{
          flex: 1,
          backgroundColor: AppColor.whiteOpacity,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          transform: showMenu ? [{scale: scaling}, {translateX: moveRight}] : [{translateX: 0}],
          borderRadius: showMenu ? wp('10') : 0,
        }}>
        <Dashboard onPress={animatedFun}></Dashboard>
      </Animated.View>
    </Animated.View>
  );
};

export default Drawer;
