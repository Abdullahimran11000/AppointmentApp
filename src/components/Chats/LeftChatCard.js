import React from 'react';
import {View,Text,Image} from 'react-native';
import { ChatStyle } from '../../assets/styles/DashboardStyle/ChatStyle';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const LeftChatCard = ({item}) => {
  return (
    <View style={{bottom: hp(3)}}>
      <View style={ChatStyle.messageTwoView}>
        <Text style={ChatStyle.textLeft}>
          {item.message}
        </Text>
      </View>
      <View>
        <Text style={ChatStyle.subHeadingTextTwo}>{item.time}</Text>
      </View>
      <Image
        style={ChatStyle.messageImage2}
        source={require('../../assets/images/selfie.jpg')}
      />
  </View>
  );
};

export default LeftChatCard ;
