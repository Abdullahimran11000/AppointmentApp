import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ii from 'react-native-vector-icons/Ionicons';
import ad from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColor';
import {NotificationStyle} from '../../assets/styles/NotificationStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notifications = props => {
  const [show, setShow] = useState(true);

  const TodayData = [
    {
      id: 1,
      //   source: require('../assets/images/selfieOne.jpg'),
      title: 'Yoh have an appointment with Dr.Manskurt Slauddin at 10pm today',
      message: 'Hello doc! i want to consult',
      time: '5m ago',
      iconprovider: ad,
      iconname: 'solution1',
    },
    {
      id: 2,
      //   source: require('../assets/images/selfieOne.jpg'),
      title: 'Yoh have an private message from Dr.Adam Jordan',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'ios-chatbox-ellipses-sharp',
    },
    {
      id: 3,
      //   source: require('../assets/images/selfieOne.jpg'),
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'videocam',
    },
    {
      id: 4,
      //   source: require('../assets/images/selfieOne.jpg'),
      title: 'you have completed the video call with Dr.David Backham',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
      iconprovider: ii,
      iconname: 'arrow-back',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={NotificationStyle.headCont}>
        <TouchableOpacity
          style={NotificationStyle.headContImageCont}
          onPress={props.onPress}>
          <item.iconprovider
            style={NotificationStyle.iconstyle}
            name={item.iconname}
            size={22}
          />

          <View style={NotificationStyle.headContMiddleCont}>
            <View style={NotificationStyle.middleInnerFirstCont}>
              <Text style={NotificationStyle.middleInnerContFirstHeading}>
                {item.title}
              </Text>
            </View>
            <View style={NotificationStyle.middleInnerSecondCont}>
              <Text
                style={NotificationStyle.middleInnerContSecondHeading}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.time}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View style={{width: wp('100'), height: hp('100'), alignSelf: 'center'}}>
        <View style={{alignSelf: 'center'}}>
          <View style={NotificationStyle.SearchBar}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                width: wp('10'),
                height: wp('10'),
                borderRadius: wp('9'),
                backgroundColor: 'rgba(0,0,0,0.07)',
                marginLeft: wp('2'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name="chevron-back-sharp" size={20} />
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                width: wp('40'),
                marginLeft: wp('20'),
                fontSize: 14,
                color: 'black',
              }}>
              Notifications
            </Text>
          </View>
        </View>

        {/* 1st render  */}

        <View
          style={{
            backgroundColor: AppColor.white,
            height: hp(40),
            width: wp(95),
            alignSelf: 'center',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: hp(5),
              justifyContent: 'center',
              width: wp(90),
              alignSelf: 'center',
            }}>
            <Text style={NotificationStyle.renderItemheaderfontfirst}>
              Today
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 0}}
              onPress={() => setShow(!show)}>
              <Text style={NotificationStyle.renderItemheaderfontsecond}>
                Mark all as read
              </Text>
            </TouchableOpacity>
          </View>
          {show ? (
            <FlatList
              data={TodayData}
              renderItem={renderItem}
              keyExtractor={item => item.id}></FlatList>
          ) : (
            ''
          )}
        </View>

        {/* 2nd render  */}

        <View
          style={{
            backgroundColor: AppColor.white,
            height: hp(40),
            width: wp(95),
            alignSelf: 'center',
            borderRadius: 20,
            marginBottom: hp(1),
            marginTop: hp(3),
            overflow: 'hidden',
          }}>
          <View
            style={{
              height: hp(5),
              justifyContent: 'center',
              width: wp(90),
              alignSelf: 'center',
            }}>
            <Text style={NotificationStyle.renderItemheaderfontfirst}>
              Yesterday
            </Text>
            <TouchableOpacity style={{position: 'absolute', right: 0}}>
              <Text style={NotificationStyle.renderItemheaderfontsecond}>
                Mark all as read
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={TodayData}
            renderItem={renderItem}
            keyExtractor={item => item.id}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Notifications;


