import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColors } from '../colors/AppColor';

const RecoverPasswordStyle = StyleSheet.create({
  mainView: {},
  headingView:{alignItems:'center'},
  headingText: {fontFamily: 'Poppins-Bold', fontSize: 16, color: "black", padding:15},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "black"},
  paraView: {alignItems: 'center', padding: 12},
  paraText: {color: 'black',fontFamily: 'Poppins-Light',fontSize: 14,textAlign: 'center'},
  inputView: {padding:16, alignItems: "center"},
  labelView: {width: wp('90')},
  labelText: {color: 'black',fontFamily: 'Poppins-Bold',fontSize: 14},
  inputStyleView: {flex: 1, flexDirection: 'row' , marginTop:5 ,width:wp('90') , height: hp('7'), borderRadius:10 , backgroundColor:"#f7f7f7" , paddingHorizontal: 5},
  inputStyle: {width:wp('70') , backgroundColor:"#f7f7f7" , fontFamily: 'Poppins-Light', fontSize: 13, paddingLeft: 10 , borderRadius:10, textAlignVertical: "bottom"},
  touchableView:{position: 'relative' , alignItems: "center" , padding: 25},
  touchableText1: {color: AppColors.black, fontFamily: "Poppins-Light" , fontSize: 12},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: 50 , backgroundColor:"#c28cde" , alignItems: 'center' },
  touchableText: {color: "white" , fontFamily: "Poppins-Bold" , fontSize: 15 , padding: 10 , textAlign: 'center'},
  buttonView: {alignItems: 'center' , marginBottom: 20}
});

export {RecoverPasswordStyle};
