import React, {useState} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DoctorHeaderStyle} from '../../assets/styles/DashboardStyle/DoctorHeaderStyle';
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DoctorHeader = props => {
  const [fill, setFill] = useState('hearto');
  const [color, setColor] = useState('white');

  return (
    <SafeAreaView>
      <View style={DoctorHeaderStyle.headerView}>
        <View style={DoctorHeaderStyle.iconView}>
          <TouchableOpacity
            style={DoctorHeaderStyle.touchableView}
            onPress={props.onPress}>
            <Ionicons name="chevron-back-sharp" size={wp(4.5)} color="#3d3b3b" />
          </TouchableOpacity>
        </View>
        <View style={DoctorHeaderStyle.iconViews}>
          <TouchableOpacity
            style={DoctorHeaderStyle.touchableView}
            onPress={() => {
              if (fill === 'heart') {
                setFill('hearto');
                setColor('white');
              } else {
                setFill('heart');
                setColor('#f56262');
              }
            }}>
            <AntDesign name={fill} size={wp(3.1)} color={color} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorHeader;
