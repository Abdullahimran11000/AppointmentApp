import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Checkbox} from 'react-native-paper';
import {SafeAreaView,View,Text,Image,ScrollView,TouchableOpacity,} from 'react-native';
import BackButton from '../components/ScrennHeader/BackButton';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {AppColor} from '../assets/colors/AppColor';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import { SignUpStyle } from '../assets/styles/AuthStyle/SignUpStyle';

const SignUp = props => {
  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
        <View style={SignUpStyle.mainView}>
          <BackButton onPress={() => props.navigation.goBack()}>
            {'Sign Up'}
          </BackButton>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Fullname</Text>
            <NeoTextInput width={wp('90')} keyboardType={'default'} placeholder={'Enter Your Name'}/>
          </View>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Email</Text>
            <NeoTextInput width={wp('90')} keyboardType={'email-address'} placeholder={'Enter your Email'}/>
          </View>
          <View style={SignUpStyle.views}>
            <Text style={SignUpStyle.text}>Password</Text>
            <NeoTextInput width={wp('90')} keyboardType={'default'} secureTextEntry={true} placeholder={'Enter your Password'} />
            <Icon style={SignUpStyle.icon} name="eye-slash" size={13} color={'black'} />
          </View>
          <View style={{marginLeft: wp(6), marginTop: hp(3)}}>
            <Checkbox status="checked" color="#c28cde" />
              <Text style={SignUpStyle.termsAndPrivacyStyle1}>I agree with</Text>
              <Text style={SignUpStyle.termsAndPrivacyStyle2}>terms</Text>
              <Text style={SignUpStyle.termsAndPrivacyStyle3}>and</Text>
              <Text style={SignUpStyle.termsAndPrivacyStyle4}>privacy</Text>
          </View>
          <View style={SignUpStyle.viewSignUpbutton}>
            <TouchableOpacity>
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
            <TouchableOpacity style={SignUpStyle.loginButton} onPress={() => props.navigation.goBack()}>
              <Text style={SignUpStyle.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
