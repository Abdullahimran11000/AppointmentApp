import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BackButton from '../ScrennHeader/BackButton';
import Swipeable from 'react-native-swipeable';
import {MessageStyle} from '../../assets/styles/AnimatedDrawerStyle/MessageStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Message = props => {
  const data = [
    {
      id: 1,
      source: require('../../assets/images/selfieOne.jpg'),
      from: 'Dr. Amanda',
      message: 'Hello doc! i want to consult',
      time: '5m ago',
    },
    {
      id: 2,
      source: require('../../assets/images/selfieOne.jpg'),
      from: 'Dr. Khawar',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
    },
    {
      id: 3,
      source: require('../../assets/images/selfieOne.jpg'),
      from: 'Dr. Aletta',
      message: 'Hello doc! i want to consult',
      time: '10m ago',
    },
    {
      id: 4,
      source: require('../../assets/images/selfieOne.jpg'),
      from: 'Dr. Miranda',
      message: 'Hello doc! i want to consult',
      time: '15m ago',
    },
    {
      id: 5,
      source: require('../../assets/images/selfieOne.jpg'),
      from: 'Dr. Pasha',
      message: 'Hello doc! i want to consult',
      time: '25m ago',
    },
  ];

  const rightButtons = [
    <TouchableOpacity style={MessageStyle.rightButtonsViews}>
      <MaterialIcons name="delete-outline" size={wp('8')} style={MessageStyle.rightButtonIcons}/>
    </TouchableOpacity>
  ];

  const renderItem = ({item}) => {
    return (
      <Swipeable rightButtons={rightButtons}>
        <View style={MessageStyle.headCont}>
          <View style={MessageStyle.headContInnerCont}>
            <TouchableOpacity
              style={MessageStyle.headContImageCont}
              onPress={props.onPress}>
              <Image
                style={MessageStyle.headContImageStyle}
                source={item.source}
                resizeMode="cover"/>
            </TouchableOpacity>
            <View style={MessageStyle.headContMiddleCont}>
              <View style={MessageStyle.middleInnerFirstCont}>
                <Text style={MessageStyle.middleInnerContFirstHeading}>
                  {item.from}
                </Text>
              </View>
              <View style={MessageStyle.middleInnerSecondCont}>
                <Text
                  style={MessageStyle.middleInnerContSecondHeading}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.message}
                </Text>
              </View>
            </View>
            <View style={MessageStyle.headContLastCont}>
              <Text style={MessageStyle.headContLastContText}>{item.time}</Text>
            </View>
          </View>
        </View>
      </Swipeable>
    );
  };
  return (
    <SafeAreaView>
      <BackButton onPress={()=>props.navigation.goBack()}>Messages</BackButton>
      <View style={{marginTop: wp('5')}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Message;
