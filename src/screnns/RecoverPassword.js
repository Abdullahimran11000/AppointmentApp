import React, {useState} from 'react';
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
import {RecoverPasswordStyle} from '../assets/styles/AuthStyle/RecoverPasswordStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import BackButton from '../components/ScrennHeader/BackButton';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {AppColor} from '../assets/colors/AppColor';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';

const RecoverPassword = props => {
  const [eye, setEye] = useState(false);
  return (
    <ScrollView>
      <SafeAreaView style={RecoverPasswordStyle.mainView}>
        <ScrollView>
          <View>
            <BackButton onPress={() => props.navigation.goBack()}>
              {'Recovery Password'}
            </BackButton>
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
                Please enter your email address to recover your forgoton
                password
              </Text>
            </View>
            <View style={RecoverPasswordStyle.inputView}>
              <View style={RecoverPasswordStyle.labelView}>
                <Text style={RecoverPasswordStyle.labelText}>New Password</Text>
              </View>

              <View style={RecoverPasswordStyle.inputStyleView}>
                <NeoTextInput
                  width={wp('90')}
                  styles={{width: wp('70'), position: 'absolute', left: 0}}
                  marginBottom={wp('3')}
                  placeholder={'Enter your password'}
                  secureTextEntry={!eye}
                  keyboardType={'ascii-capable'}>
                  <TouchableOpacity
                    style={RecoverPasswordStyle.iconTouchableStyle}
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
                        size={wp('4.5')}
                        color="black"
                      />
                    ) : (
                      <Entypo name="eye" size={wp('4.5')} color="black" />
                    )}
                  </TouchableOpacity>
                </NeoTextInput>
              </View>
            </View>

            <View style={RecoverPasswordStyle.headingView}>
              <View style={RecoverPasswordStyle.labelView}>
                <Text style={RecoverPasswordStyle.labelText}>
                  Confirm Password
                </Text>
              </View>

              <NeoTextInput
                width={wp('90')}
                placeholder={'Confirm your password'}
                secureTextEntry={!eye}
                keyboardType={'ascii-capable'}
              />
            </View>

            <View style={RecoverPasswordStyle.touchableView}>
              <TouchableOpacity>
                <Text style={RecoverPasswordStyle.touchableText1}>
                  Change Password
                </Text>
              </TouchableOpacity>
            </View>
            <View style={RecoverPasswordStyle.buttonView}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Congratulation')}>
                <NeoButton
                  darkShadowColor={AppColor.black}
                  width={wp('90')}
                  backgroundColor={AppColor.primary}
                  height={hp('7')}
                  borderRadius={wp('10')}
                  marginBottom={wp('10')}>
                  <Text style={RecoverPasswordStyle.touchableText}>Save</Text>
                </NeoButton>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default RecoverPassword;