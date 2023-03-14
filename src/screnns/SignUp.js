import React from 'react';
import { useState , useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Checkbox} from 'react-native-paper';
import {SafeAreaView,View,Text,Image,ScrollView,TouchableOpacity,} from 'react-native';
import BackButton from '../components/ScrennHeader/BackButton';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {AppColor} from '../assets/colors/AppColor';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import { SignUpStyle } from '../assets/styles/AuthStyle/SignUpStyle';
import CustomModal from '../components/Modal/CustomModal';

const SignUp = ({navigation}) => {
  const [eye, setEye] = useState(false);
  const [checkbox , setCheckBox] = useState(false);
  const [showRegistrationMessageInModal , setShowRegistrationMessageInModal] = useState(false)
  const [nameText , setNameText] = useState()
  const [nameLabel , setNameLabel] = useState('')
  const [nameValidator , setNameValidator] = useState(false)
  const [emailText , setEmailText ] = useState()
  const [emailLabel , setEmailLabel ] = useState('')
  const [emailValidator , setEmailValidator] = useState(false)
  const [passwordText , setPasswordText] = useState()
  const [passwordLabel , setPasswordLabel] = useState('')
  const [passwordValidator , setPasswordValidator] = useState(false)
  // const [checkboxText , setCheckBoxText] = useState('')
  // const [checkboxLabel , setCheckBoxLabel] = useState('')
  // const [checkboxValidator , setCheckBoxValidator] = useState(false)

  const signUpHandler = () => {
    if(nameText === '')
    {
      setNameLabel('Enter Your Name')
      setNameValidator(true)
    }
    else if(emailText === '')
    {
      setEmailLabel('Enter your Email')
      setEmailValidator(true)
      setNameLabel('')
      setNameValidator(false)
    }
    else if(!emailText.includes('@') || !emailText.includes('.com'))
    {
      setEmailLabel('Enter Correct Email')
      setEmailValidator(true)
      setNameLabel('')
      setNameValidator(false)
    }
    else if(passwordText === '')
    {
      setPasswordLabel('Enter your password')
      setPasswordValidator(true)
      setNameLabel('')
      setNameValidator(false)
      setEmailLabel('')
      setEmailValidator(false)

    }
    // else if(checkboxText === '')
    // {
    //   setCheckBoxLabel('Are you agree on Terms and Privacy')
    //   setCheckBoxValidator(true)
    //   setNameLabel('')
    //   setNameValidator(false)
    //   setEmailLabel('')
    //   setEmailValidator(false)
    //   setPasswordLabel('')
    //   setPasswordValidator(false)
    // }
    else
    {
      setEmailLabel('')
      setEmailValidator(false)
      setNameLabel('')
      setNameValidator(false)
      setPasswordLabel('')
      setPasswordValidator(false)
      setShowRegistrationMessageInModal(true)
    }
    
  }
  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('SignUp screen is focusing right now!');
    });
  }, []);
  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
        <View style={SignUpStyle.mainView}>
          <BackButton onPress={() => props.navigation.goBack()}>
            {'Sign Up'}
          </BackButton>
          <View style={[SignUpStyle.views,{marginTop:hp(5)}]}>
            <Text style={SignUpStyle.text}>Fullname</Text>
            <NeoTextInput width={wp('90')} keyboardType={'default'} placeholder={'Enter Your Name'} 
                          onChangeText={text => {setNameText(text)}}/>
                          </View>
          {nameValidator ? 
           <Text
           style={{
             fontFamily: 'Poppins-Light',
             fontSize: wp('3'),
             color: AppColor.red,
             width: wp('90'),
             alignSelf: 'center',
           }}>
           {nameLabel}
         </Text> : null}
          
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Email</Text>
            <NeoTextInput width={wp('90')} keyboardType={'email-address'} placeholder={'Enter your Email'}
            onChangeText={text => {setEmailText(text)}}/>
          </View>
          {emailValidator ? 
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('90'),
                alignSelf: 'center',
              }}>
            {emailLabel}
          </Text> : null}
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Password</Text>
            <NeoTextInput width={wp('90')} keyboardType={'default'} secureTextEntry={true} placeholder={'Enter your Password'} 
                           onChangeText={text => {setPasswordText(text)}}/>
            <TouchableOpacity style={SignUpStyle.icon}  onPress={() => {
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
          </View>
          {passwordValidator ? 
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('90'),
                alignSelf: 'center',
              }}>
            {passwordLabel}
          </Text> : null}
          
          <View style={{marginLeft: wp(6), marginTop: hp(3)}}>
            <TouchableOpacity onPress={() => {
              if(checkbox == true){
                setCheckBox(false)
                }
              else{
                setCheckBox(true)
              }  }}>
            {!checkbox ? (
              <Checkbox status="unchecked"/>

            ) : (
              <Checkbox status="checked" color="#c28cde" />
              )}
            </TouchableOpacity>
              <Text style={SignUpStyle.termsAndPrivacyStyle1}>I agree with</Text>
              <Text style={SignUpStyle.termsAndPrivacyStyle2}>terms</Text>
              <Text style={SignUpStyle.termsAndPrivacyStyle3}>and</Text>
              <Text style={SignUpStyle.termsAndPrivacyStyle4}>privacy</Text>
          </View>
          {/* {checkboxValidator ?  
          <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: wp('3'),
                color: AppColor.red,
                width: wp('83'),
                alignSelf: 'center',
              }}>
            {checkboxLabel}
          </Text> : null} */}

          <View style={SignUpStyle.viewSignUpbutton}>
            <TouchableOpacity onPress={signUpHandler}>
              <NeoButton lightShadowColor={AppColor.white} width={wp('83')} height={hp('6')} borderRadius={wp('15')} backgroundColor={AppColor.primary}>
                <Text style={SignUpStyle.SignUpText}>Sign Up</Text>
              </NeoButton>
            </TouchableOpacity>
            <Text style={SignUpStyle.middleTextBetweenButtons}>Or</Text>
          </View>
          <View style={SignUpStyle.buttonTwoView}>
            <TouchableOpacity>
              <NeoButton lightShadowColor={AppColor.white} darkShadowColor={AppColor.black} marginTop={wp('4')} width={wp('83')}height={hp('6')} borderRadius={wp('15')} backgroundColor={AppColor.whiteShade}>
                <Image style={SignUpStyle.image} source={require('../assets/images/monoGoogle.jpg')}/>
                <View style={SignUpStyle.SignInButton}>
                  <Text style={SignUpStyle.SignInText}>Sign in With this</Text>
                </View>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View style={SignUpStyle.footerView}>
            <Text style={SignUpStyle.footerText}>Already have an Account?</Text>
            <TouchableOpacity style={SignUpStyle.loginButton} onPress={() => navigation.goBack()}>
              <Text style={SignUpStyle.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CustomModal
          isVisible={showRegistrationMessageInModal}
          onBackdropPress={() => {setShowRegistrationMessageInModal(false)}}
          modalButtonPress={() => {navigation.navigate('LogIn');}}
          buttonBackgroundColor={AppColor.primary}
          source={require('../assets/animations/success.json')}
          lottieStyle={{width: wp('35'), height: wp('35')}}
          text={'Registered Successfully'}
          style={{marginTop: wp(10)}}
          buttonText={'Go to LogIn'}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

