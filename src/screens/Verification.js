import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {VerificationStyle} from '../assets/styles/VerificationStyle';

const Verification = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={VerificationStyle.mainView}>
          <View style={VerificationStyle.headingView}>
            <Text style={VerificationStyle.headingText}>Verification</Text>
          </View>
          <View style={VerificationStyle.animationView}>
            <Lottie
              style={VerificationStyle.animationStyle}
              source={require('../assets/animations/appIntroVerification.json')}
              autoPlay
            />
          </View>
          <View style={VerificationStyle.tagView}>
            <Text style={VerificationStyle.tagText}>Verify your email</Text>
          </View>
          <View style={VerificationStyle.paraView}>
            <Text style={VerificationStyle.paraText}>
              Please enter the 4 verification code that we have sent to your
              email
            </Text>
          </View>
          <View
            style={VerificationStyle.textView}>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}></TextInput>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}></TextInput>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}></TextInput>
            <TextInput
              style={VerificationStyle.newInputs}
              maxLength={1}
              keyboardType={'numeric'}></TextInput>
          </View>
          <View style={VerificationStyle.touchableView}>
            <Text style={VerificationStyle.textStyle}>Don't recieve code?</Text>
            <TouchableOpacity>
              <Text style={VerificationStyle.touchableText1}>Resend code</Text>
            </TouchableOpacity>
          </View>
          <View style={VerificationStyle.headingView}>
            <TouchableOpacity style={VerificationStyle.touchableStyle}>
              <Text style={VerificationStyle.touchableText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Verification;
