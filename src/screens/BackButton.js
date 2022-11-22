import React from 'react';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BackButtonStyle } from '../assets/styles/BackButtonStyle';

const BackButton = (props) => {
  return (
    <SafeAreaView>
      <View style={BackButtonStyle.headerView}>
        <View style={BackButtonStyle.iconView}>
          <TouchableOpacity onPress={props.onPress}>
            <Ionicons name="chevron-back-sharp" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={BackButtonStyle.headingText}>{props.children}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BackButton;
