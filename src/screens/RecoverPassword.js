import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {RecoverPasswordStyle} from '../assets/styles/RecoverPasswordStyle';
import Entypo from 'react-native-vector-icons/Entypo';

const RecoverPassword = () => {
  const [eye, setEye] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={RecoverPasswordStyle.mainView}>
          <View style={RecoverPasswordStyle.headingView}>
            <Text style={RecoverPasswordStyle.headingText}>
              Recovery Password
            </Text>
          </View>
          <View style={RecoverPasswordStyle.animationView}>
            <Lottie
              style={RecoverPasswordStyle.animationStyle}
              source={require('../assets/animations/appIntroRecover.json')}
              autoPlay
            />
          </View>
          <View style={RecoverPasswordStyle.headingView}>
            <Text style={RecoverPasswordStyle.tagText}>
              Create new password
            </Text>
          </View>
          <View style={RecoverPasswordStyle.paraView}>
            <Text style={RecoverPasswordStyle.paraText}>
              Please enter your email address to recover your forgoton password
            </Text>
          </View>
          <View style={RecoverPasswordStyle.inputView}>
            <View style={RecoverPasswordStyle.labelView}>
              <Text style={RecoverPasswordStyle.labelText}>New Password</Text>
            </View>
            <View style={RecoverPasswordStyle.inputStyleView}>
              <TextInput
                style={RecoverPasswordStyle.inputStyle}
                placeholder="Enter your password"
                secureTextEntry={!eye}
                keyboardType="ascii-capable"
              />
              <TouchableOpacity
                onPress={() => {
                  if (eye === true) {
                    setEye(false);
                  } else {
                    setEye(true);
                  }
                }}>
                {!eye ? (
                  <Entypo
                    name="eye-with-line"
                    size={15}
                    color="black"
                    style={{
                      marginLeft: 35,
                      alignItems: 'center',
                      marginVertical: 15,
                    }}></Entypo>
                ) : (
                  <Entypo
                    name="eye"
                    size={15}
                    color="black"
                    style={{
                      marginLeft: 35,
                      alignItems: 'center',
                      marginVertical: 15,
                    }}></Entypo>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={RecoverPasswordStyle.headingView}>
              <View style={RecoverPasswordStyle.labelView}>
                <Text style={RecoverPasswordStyle.labelText}>
                  Confirm Password
                </Text>
              </View>
              <View style={RecoverPasswordStyle.inputStyleView}>
                <TextInput
                  style={RecoverPasswordStyle.inputStyle}
                  placeholder="Confirm your password"
                  secureTextEntry={!eye}
                  keyboardType="ascii-capable"
                />
              </View>
            </View>
          </View>
          <View style={RecoverPasswordStyle.touchableView}>
            <TouchableOpacity>
              <Text style={RecoverPasswordStyle.touchableText1}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
          <View style={RecoverPasswordStyle.buttonView}>
            <TouchableOpacity style={RecoverPasswordStyle.touchableStyle}>
              <Text style={RecoverPasswordStyle.touchableText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoverPassword;
