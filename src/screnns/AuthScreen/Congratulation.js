import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import { CongratulationStyle } from '../../assets/styles/AuthStyle/CongratulationStyle';

const Congratulation = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={CongratulationStyle.animationView}>
            <Lottie
              style={CongratulationStyle.animationStyle}
              source={require('../../assets/animations/appIntroCongrats.json')}
              autoPlay
            />
          </View>
          <View style={CongratulationStyle.headingView}>
            <Text style={CongratulationStyle.tagText}>Congrats!</Text>
          </View>
          <View style={CongratulationStyle.paraView}>
            <Text style={CongratulationStyle.paraText}>
              Your password has been changed. Please log in again with new password
            </Text>
          </View>
          <View style={CongratulationStyle.headingView}>
            <TouchableOpacity style={CongratulationStyle.touchableStyle} onPress={()=>props.navigation.navigate('LogIn')}>
              <Text style={CongratulationStyle.touchableText}>Start Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Congratulation;
