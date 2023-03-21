import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColor';

const SignUpStyle = StyleSheet.create({
  mainView: {width: wp('100'), marginTop: hp(5), alignSelf: 'center', flex: 9},
  buttonTwoView: {alignItems: 'center'},
  footerView: {alignSelf: 'center', marginTop: hp(2)},
  inputs: {
    width: wp(84),
    fontFamily: 'Poppins-SemiBold',
  },
  text: {fontSize: 15, color: AppColor.black, fontFamily: 'Poppins-SemiBold'},
  views: {width: wp('90'), alignSelf: 'center'},
  icon: {position: 'absolute', marginVertical: hp(7.5), right: wp(4)},
  viewSignUpbutton: {
    width: wp('82'),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  SignUpbutton: {
    backgroundColor: AppColor.primary,
    width: wp('83'),
    height: hp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('15'),
  },
  SignUpText: {color: AppColor.white, fontFamily: 'Poppins-SemiBold'},
  footerText: {fontFamily: 'Poppins-SemiBold',color:AppColor.black},
  loginText: {color: AppColor.black, fontFamily: 'Poppins-Medium'},
  SignInButton: {
    width: wp('35'),
    height: hp('6'),
    justifyContent: 'center',
    marginLeft: wp('7'),
  },
  image: {
    width: wp(5),
    height: hp(3),
    position: 'absolute',
    marginLeft: wp('20'),
    left:hp(0),
    borderRadius:wp(10)
  },
  SignInText: {fontSize: wp('3.8'), fontFamily: 'Poppins-SemiBold',color:AppColor.black},
  termsAndPrivacyStyle: {
    position: 'absolute',
    marginHorizontal: wp(9.5),
    marginTop: hp(1.2),
    fontFamily: 'Poppins-Regular',
    color: AppColor.black,
  },
  middleTextBetweenButtons: {
    marginTop: hp(2),
    textAlign: 'center',
  },
  ValidatorStyle: {
    fontFamily: 'Poppins-Light',
    fontSize: wp('3'),
    color: AppColor.red,
    width: wp('90'),
    alignSelf: 'center',
  },
});

export {SignUpStyle};
