import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CongratulationStyle = StyleSheet.create({
  mainView: {height: hp('100')},
  headingView:{alignItems:'center' , marginTop: 60},
  animationView: {alignItems: 'center' , marginTop: 50},
  animationStyle: {width: wp('90'), height: hp('35')},
  tagText: {fontFamily: 'Poppins-SemiBold', fontSize: 16, color: "black"},
  paraView: {alignItems: 'center', padding: 12},
  paraText: {color: 'black',fontFamily: 'Poppins-Light',fontSize: 14,textAlign: 'center'},
  touchableView:{position: 'relative' , alignItems: "center" , padding: 25},
  touchableStyle: {width: wp("90") , height: hp('7'), borderRadius: 50 , backgroundColor:"#c28cde" , alignItems: 'center' },
  touchableText: {color: "white" , fontFamily: "Poppins-Bold" , fontSize: 15 , padding: 10}
});

export {CongratulationStyle};
