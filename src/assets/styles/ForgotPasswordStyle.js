import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ForgotPasswordStyle = StyleSheet.create({
  mainView: {},
  headingView:{alignItems:'center',justifyContent:"center"},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "black"},
  paraView: {alignItems: 'center', padding: 12},
  paraText: {color: 'black',fontFamily: 'Poppins-Light',fontSize: 14,textAlign: 'center'},
  inputView: {marginTop: 18, alignItems: "center"},
  labelView: {width:wp('91')},
  labelText: {color: 'black',fontFamily: 'Poppins-Bold',fontSize: 14},
  inputStyle: {marginTop:5 , width:wp('90') , height: hp('7'), borderRadius:10 , backgroundColor:"#f7f7f7" , padding:10, fontFamily: 'Poppins-Light'},
  touchableView:{position: 'relative' , alignItems: "center" , padding: 25},
  touchableText1: {color: "ed586e" , fontFamily: "Poppins-Light" , fontSize: 12},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: 50 , backgroundColor:"#c28cde" , alignItems: 'center' },
  touchableText: {color: "white" , fontFamily: "Poppins-Bold" , fontSize: 15 , padding: 10}
});

export {ForgotPasswordStyle};
