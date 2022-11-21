import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';

const AppIntroStyle = StyleSheet.create({
  mainView: {backgroundColor: '#c894e3', height: hp('100')},
  sliderView: {height: hp('80')},
  animationView: {alignItems: 'center'},
  animationStyle: {width: wp('90'), height: hp('48')},
  headingView: {justifyContent: 'center', alignItems: 'center'},
  headingText: {color: 'white', fontFamily: 'Poppins-Bold', fontSize: 16},
  paraView: {justifyContent: 'space-evenly', alignItems: 'center', padding: 12},
  paraText: {color: 'white',fontFamily: 'Poppins-Light',fontSize: 15,textAlign: 'center'},
});

export {AppIntroStyle};
