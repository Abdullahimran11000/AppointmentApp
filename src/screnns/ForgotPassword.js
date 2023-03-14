import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Lottie from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ForgotPasswordStyle} from '../assets/styles/AuthStyle/ForgotPasswordStyle';
import BackButton from '../components/ScrennHeader/BackButton';
import {AppColor} from '../assets/colors/AppColor';
import {useNavigation} from '@react-navigation/native';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';

const ForgotPassword = ({navigation}) => {

  const [emailText , setEmailText] = useState('Gandu@gmail.com')
  const [emailLabelText , setEmailLabelText] = useState('')
  const [checkEmailTextValid , setCheckEmailTextValid] = useState(false)

  const signUpHandler = () => {
    if(emailText === ''){
      setEmailLabelText('Enter your email')
      setCheckEmailTextValid(true)
    }
    else if(emailText.includes('@gmail.com')){
      setCheckEmailTextValid(false)
      navigation.navigate('Verification')
    }
    else{
      setEmailLabelText('Enter correct email')
      setCheckEmailTextValid(true)
    }
  }
  return (
    <ScrollView>
      <SafeAreaView style={ForgotPasswordStyle.safeView}>
        <View style={ForgotPasswordStyle.mainView}>
          <BackButton onPress={() => navigation.goBack()}>
            {'Forgot Password'}
          </BackButton>
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
            <NeoTextInput
              value={emailText}
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Example@gmail.com'}
              onChangeText={text => setEmailText(text)}
            />
          </View>
          {checkEmailTextValid ? (
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('4'),
                color: AppColor.red,
                width: wp('90'),
                alignSelf: 'flex-start',
                padding:wp(5)
              }}>
            {emailLabelText}
          </Text>
          ) : null}
          <View style={ForgotPasswordStyle.touchableView}>
            <TouchableOpacity onPress={() => {navigation.navigate('TryAnotherWay')}}>
              <Text style={ForgotPasswordStyle.touchableText1}>
                Try another way
              </Text>
            </TouchableOpacity>
          </View>
          <View style={ForgotPasswordStyle.headingView}>
            <TouchableOpacity
              onPress={signUpHandler}>
              <NeoButton
                darkShadowColor={AppColor.black}
                marginTop={wp('10')}
                width={wp('90')}
                backgroundColor={AppColor.primary}
                height={hp('7')}
                borderRadius={wp('10')}
                marginBottom={wp('10')}>
                <Text style={ForgotPasswordStyle.touchableText}>Send</Text>
              </NeoButton>
            </TouchableOpacity>
          </View>
        </View>  
     </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPassword;
