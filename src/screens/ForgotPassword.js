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
import {ForgotPasswordStyle} from '../assets/styles/ForgotPasswordStyle';

const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={ForgotPasswordStyle.mainView}>
          <View style={ForgotPasswordStyle.headingView}>
            <Text style={ForgotPasswordStyle.headingText}>Forgot Password</Text>
          </View>
          <View style={ForgotPasswordStyle.animationView}>
            <Lottie
              style={ForgotPasswordStyle.animationStyle}
              source={require('../assets/animations/appIntroForgot.json')}
              autoPlay
            />
          </View>
          <View style={ForgotPasswordStyle.headingView}>
            <Text style={ForgotPasswordStyle.tagText}>Find your account</Text>
          </View>
          <View style={ForgotPasswordStyle.paraView}>
            <Text style={ForgotPasswordStyle.paraText}>
              Please enter your email address to recover your forgoton password
            </Text>
          </View>
          <View style={ForgotPasswordStyle.inputView}>
            <View style={ForgotPasswordStyle.labelView}>
              <Text style={ForgotPasswordStyle.labelText}>Email Address</Text>
            </View>
            <TextInput
              style={ForgotPasswordStyle.inputStyle}
              placeholder="Example@gmail.com"></TextInput>
          </View>
          <View style={ForgotPasswordStyle.touchableView}>
            <TouchableOpacity>
              <Text style={ForgotPasswordStyle.touchableText1}>
                Try another way
              </Text>
            </TouchableOpacity>
          </View>
          <View style={ForgotPasswordStyle.headingView}>
            <TouchableOpacity style={ForgotPasswordStyle.touchableStyle}>
              <Text style={ForgotPasswordStyle.touchableText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
