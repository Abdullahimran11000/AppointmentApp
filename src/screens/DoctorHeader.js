import React, {useState} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DoctorHeaderStyle} from '../assets/styles/DoctorHeaderStyle';
const DoctorHeader = props => {
  const [fill, setFill] = useState('hearto');
  const [color, setColor] = useState('#f56262');

  return (
    <SafeAreaView>
      <View style={DoctorHeaderStyle.headerView}>
        <View style={DoctorHeaderStyle.iconView}>
          <TouchableOpacity
            style={DoctorHeaderStyle.touchableView}
            onPress={props.onPress}>
            <Ionicons
              name="chevron-back-sharp"
              size={25}
              color="#3d3b3b"
              style={{marginVertical: 3}}
            />
          </TouchableOpacity>
        </View>
        <View style={DoctorHeaderStyle.iconViews}>
          <TouchableOpacity
            style={DoctorHeaderStyle.touchableView}
            onPress={() => {
              if (fill === 'heart') {
                setFill('hearto');
                setColor('#665f5f');
              } else {
                setFill('heart');
                setColor('#f56262');
              }
            }}>
            <AntDesign
              name={fill}
              size={25}
              color={color}
              style={{marginVertical: 6}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorHeader;
