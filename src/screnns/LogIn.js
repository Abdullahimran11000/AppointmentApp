import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppColor} from '../assets/colors/AppColor';
import BackButton from '../components/ScrennHeader/BackButton';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {LoginStyle} from '../assets/styles/AuthStyle/LoginStyle';
import Entypo from 'react-native-vector-icons/Entypo';

const LogIn = ({navigation}) => {
  const [eye, setEye] = useState(false);
  const [emailText, setEmailText] = useState('asnan123@gmail.com');
  const [emailLabelText, setEmailLabelText] = useState('');
  const [checkEmailTextValid, setCheckEmailTextValid] = useState(false);
  const [passwordText, setPasswordText] = useState('abdullah@');
  const [passwordLabelText, setPasswordLabelText] = useState('');
  const [passwordValidator, setPasswordValidator] = useState(false);

  const submitHandler = () => {
    if (emailText === '') {
      setEmailLabelText('Enter Your Email');
      setCheckEmailTextValid(true);
    } else if (!emailText.includes('@') || !emailText.includes('.com')) {
      setEmailLabelText('Enter your correct Email Address.');
      setCheckEmailTextValid(true);
    } else if (passwordText == '') {
      setPasswordLabelText('Enter your password');
      setPasswordValidator(true);
      setEmailLabelText('');
      setCheckEmailTextValid(false);
    } else {
      //CODE TO HANDLE LOGIN REQUEST
      setEmailLabelText('');
      setCheckEmailTextValid(false);
      setPasswordLabelText('');
      setPasswordValidator(false);
      navigation.replace('Drawer');
    }
  };

  const ast = {
    asterik:<Text style={{color:'red'}}>{'*'}</Text>
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('LogIn screen is focusing right now!');
    });
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade, height: hp('100'),flex:10}}>
      <View style={{flex:0.1}}></View>
          <View style={{flex:0.6}}>
            <Text style={LoginStyle.headerView}> Log in </Text>
          </View>
        <View styles={LoginStyle.MainView}>
          <View style={LoginStyle.inputFieldsView}>
            <View>
              <Text style={LoginStyle.TextStyle}>Email address {ast.asterik}</Text>
              <NeoTextInput
                width={wp('90')}
                marginBottom={wp('5')}
                placeholder={'Enter your email'}
                keyboardType={'email-address'}
                onChangeText={text => {
                  setEmailText(text);
                }}
              />
            </View>
            {checkEmailTextValid ? (
              <Text
                style={{
                  fontFamily: 'Poppins-Light',
                  fontSize: wp('3'),
                  color: AppColor.red,
                  width: wp('90'),
                  alignSelf: 'center',
                }}>
                {emailLabelText}
              </Text>
            ) : null}
            <View>
              <Text style={LoginStyle.TextStyle}>Password {ast.asterik}</Text>
              <NeoTextInput
                width={wp('90')}
                marginBottom={wp('5')}
                placeholder={'Enter your password'}
                secureTextEntry={eye}
                onChangeText={text => {
                  setPasswordText(text);
                }}
              />
              <TouchableOpacity
            style={LoginStyle.iconOpacity}
            onPress={() => {
              if (eye === true) {
                setEye(false);
              } else {
                setEye(true);
              }
            }}>
            {!eye ? (
              <Icon name="eye-slash" size={wp('4.5')} color={AppColor.black}/>
            ) : (
              <Entypo name="eye" size={wp('4.5')} color={AppColor.black} />
            )}
              </TouchableOpacity>
            </View>
            {passwordValidator ? (
              <Text
                    style={{
                      fontFamily: 'Poppins-Light',
                      fontSize: wp('3'),
                      color: AppColor.red,
                      width: wp('90'),
                      alignSelf: 'center',
                    }}>
                    {passwordLabelText}
                  </Text>
                ) : null}
          </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={LoginStyle.ForgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          <View style={LoginStyle.MainLoginButtonView}>
            <NeoButton
              width={wp('87 ')}
              height={hp('7')}
              backgroundColor={AppColor.primary}
              borderRadius={wp('10')}>
              <TouchableOpacity
                style={LoginStyle.TouchableLogin}
                onPress={submitHandler}>
                <View style={LoginStyle.LogInButtonView}>
                  <Text style={LoginStyle.LoginText}>Log In</Text>
                </View>
              </TouchableOpacity>
            </NeoButton>
            <Text style={LoginStyle.orText}>or</Text>
          </View>
          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <NeoButton
              width={wp('86 ')}
              height={hp('6')}
              backgroundColor={AppColor.whiteShade}
              borderRadius={wp('10')}>
              <TouchableOpacity style={LoginStyle.TouchableGoogle}>
                <Image
                  style={LoginStyle.GoogleImage}
                  source={require('../assets/images/monoGoogle.jpg')}
                />
                <Text style={LoginStyle.GoogleText}>Login With Google</Text>
              </TouchableOpacity>
            </NeoButton>
          </View>
          <View style={LoginStyle.LastView}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={LoginStyle.SignUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};
export default LogIn;
