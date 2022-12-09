import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';


const RecoverPasswordStyle = StyleSheet.create({
  headingView:{alignItems:'center'},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: wp('4.5'), color: "black"},
  paraView: {alignItems: 'center', width: wp('80'), alignSelf: 'center', marginTop: wp('5')},
  paraText: {color: AppColor.black, fontFamily: 'Poppins-Light',fontSize: wp('3.8'),textAlign: 'center'},
  inputView: {marginTop: wp('10'), alignItems: "center", marginBottom: wp('2')},
  labelView: {width: wp('90')},
  labelText: {color: AppColor.black, fontFamily: 'Poppins-Bold',fontSize: wp('3.9')},
  inputStyleView: {flex: 1, flexDirection: 'row' , marginTop:wp('1.5') ,width:wp('90') , height: hp('7'), borderRadius:wp('3') , backgroundColor: AppColor.white},
  inputStyle: {width:wp('70') , backgroundColor: AppColor.white , fontFamily: 'Poppins-Light', fontSize: wp('3.7'), paddingLeft: wp('3') , borderRadius: wp('3'), textAlignVertical: 'bottom'},
  touchableView:{position: 'relative' , alignItems: "center" , marginTop: wp('10')},
  touchableText1: {color: AppColor.red, fontFamily: "Poppins-Light" , fontSize: wp('3.5')},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: wp('10') , backgroundColor: AppColor.primary , alignItems: 'center', justifyContent: 'center'},
  touchableText: {color: "white" , fontFamily: "Poppins-Bold" , fontSize: wp('4'), textAlign: 'center'},
  buttonView: {alignItems: 'center', marginTop: wp('7'), marginBottom: wp('5')}
});

export {RecoverPasswordStyle};
