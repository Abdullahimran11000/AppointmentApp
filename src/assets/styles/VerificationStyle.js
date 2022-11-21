import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { AppColors } from '../colors/AppColor'

const VerificationStyle = StyleSheet.create({
  headingView:{alignItems:'center'},
  headerView: {flex: 1, flexDirection: 'row',  padding:15},
  headingText: {fontFamily: 'Poppins-Bold', fontSize: 16, color: "black"},
  animationView: {alignItems: 'center' , marginTop: 20},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagView: {alignItems: "center" , paddingTop: 25},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "black"},
  paraView: {alignItems: 'center', padding: 12},
  paraText: {color: 'black',fontFamily: 'Poppins-Light',fontSize: 14,textAlign: 'center'},
  inputView: {padding:16, alignItems: "center"},
  labelView: {width: wp('90')},
  labelText: {color: 'black',fontFamily: 'Poppins-Bold',fontSize: 14},
  inputStyle: {marginTop:5 , width:wp('90') , height: hp('7'), borderRadius:10 , backgroundColor:"#f7f7f7" , padding:10, fontFamily: 'Poppins-Light'},
  touchableView:{position: 'relative' , alignItems: "center", paddingTop: 20},
  textStyle:{color: "black" , fontFamily: "Poppins-Light" , fontSize: 12},
  touchableText1: {color: AppColors.black , fontFamily: "Poppins-Light" , fontSize: 12},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: 50 , backgroundColor:"#c28cde" , alignItems: 'center' , marginBottom: 30},
  touchableText: {color: "white" , fontFamily: "Poppins-Bold" , fontSize: 15 , padding: 10, textAlign: "center"},
  textView: {flex: 1 , flexDirection: 'row' , justifyContent: 'space-evenly' , padding: 10},
  buttonView:{alignItems:'center' , marginTop:30},
  newInputs: {width: wp("16") , height: wp('16') , borderRadius:10 , backgroundColor:"#f6f5f7" , fontFamily: "Poppins-Bold" , fontSize: 25 , padding: 5 , textAlign: 'center' ,},
});

export {VerificationStyle};
