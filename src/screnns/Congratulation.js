import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Lottie from 'lottie-react-native';
import {CongratulationStyle} from '../assets/styles/AuthStyle/CongratulationStyle';
import { AppColor } from '../assets/colors/AppColor';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';

const Congratulation = ({navigation}) => {

  useEffect(() => {navigation.addListener('focus' , () => {
    console.log('Congratulation screen is focusing right now!')
  })} , []);
  return (
    <SafeAreaView style={CongratulationStyle.mainView}>
        <View>
          <View style={CongratulationStyle.animationView}>
            <Lottie
              style={CongratulationStyle.animationStyle}
              source={require('../assets/animations/appIntroCongrats.json')}
              autoPlay
            />
          </View>
          <View style={CongratulationStyle.headingView}>
            <Text style={CongratulationStyle.tagText}>Congrats!</Text>
          </View>
          <View style={CongratulationStyle.paraView}>
            <Text style={CongratulationStyle.paraText}>
              Your password has been changed. Please log in again with new
              password
            </Text>
          </View>
          <View style={CongratulationStyle.headingView}>
            <TouchableOpacity onPress={() => {navigation.replace('LogIn')}}>
              <NeoButton
                darkShadowColor={AppColor.black}
                width={wp('90')}
                backgroundColor={AppColor.primary}
                height={hp('7')}
                borderRadius={wp('10')}
                marginBottom={wp('3')}>
                <Text style={CongratulationStyle.touchableText}>Start Now</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Congratulation;
