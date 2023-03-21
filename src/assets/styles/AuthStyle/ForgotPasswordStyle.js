import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';


const ForgotPasswordStyle = StyleSheet.create({
  safeView: {backgroundColor: AppColor.whiteShade, height: hp('100'),flex:10},
  headingView:{alignItems:'center',justifyContent:"center"},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: AppColor.black},
  paraView: {alignItems: 'center', padding: wp('3')},
  paraText: {color: AppColor.black,fontFamily: 'Poppins-Light',fontSize: wp('4'),textAlign: 'center'},
  inputView: {marginTop: wp('6'), alignItems: "center"},
  labelView: {width:wp('90')},
  labelText: {color: AppColor.black, fontFamily: 'Poppins-Bold',fontSize: wp('3.8')},
  touchableView:{alignItems: "center" , marginTop: wp('5')},
  touchableText1: {color: AppColor.red, fontFamily: "Poppins-Light" , fontSize: wp('3.5')},
  touchableText: {color: AppColor.white , fontFamily: "Poppins-Bold" , fontSize: wp('4')},
  checkEmailTextValidStyle:{fontFamily: 'Poppins-Light',fontSize: wp('4'),color: AppColor.red,width: wp('90'),alignSelf: 'flex-start',padding:wp(5)}
});

export {ForgotPasswordStyle};
