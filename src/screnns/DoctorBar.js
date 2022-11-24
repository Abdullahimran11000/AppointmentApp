import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const DoctorBar = (props) => {
    
  return (
    <View
      style={{
        width: wp('90'),
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 15,
      }}>
      <View style={{position: 'absolute', left: 0}}>
        <Text style={{fontFamily: 'Poppins-Bold', color: 'rgba(0, 0, 0, 0.8)'}}>
          {props.One}
        </Text>
      </View>
      <View style={{position: 'absolute', right: 0}}>
        <TouchableOpacity>
          <Text
            style={{fontFamily: 'Poppins-Light', color: 'rgba(0, 0, 0, 0.6)'}}>
            {props.Two}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorBar;
