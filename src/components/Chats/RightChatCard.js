import React from 'react';
import {View,Text,Image} from 'react-native';
import {TextInputStyle} from '../../assets/styles/ComponentStyle/CustomTextInputStyle/TextInputStyle';
import { ChatStyle } from '../../assets/styles/DashboardStyle/ChatStyle';

const RightChatCard = ({item}) => {
  return (
    <View>
      <View style={ChatStyle.messageOneView}>
        <Text style={ChatStyle.textRight}>{item.message}</Text>
      </View>
      <View>
        <Text style={ChatStyle.subHeadingTextOne}>{item.time}</Text>
      </View>
      <Image
        style={ChatStyle.messageImage1}
        source={require('../../assets/images/profile.jpg')}
      />
    </View>
  );
};

export default RightChatCard;
