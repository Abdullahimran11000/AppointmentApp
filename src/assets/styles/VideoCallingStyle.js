import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../colors/AppColor';

const VideoCallingStyle = StyleSheet.create({
  nameTimeView: {width: wp('40'),height: hp('12'),justifyContent: 'center',alignSelf: 'center',marginTop: wp('3')},
  text: {color: AppColor.black,textAlign: 'center',fontFamily: 'Poppins-Bold',},
  LottieView: {alignItems: 'center',justifyContent: 'center'},
  imageStyle: {width: wp('30'),height: hp('20'),borderRadius: wp('15'),position: 'absolute',bottom: hp('18.3')},
  footerView: {width: wp('100'),height: hp('15'),marginTop: wp('10'),justifyContent: 'space-evenly',flexDirection: 'row',alignItems: 'center',},
});

export {VideoCallingStyle};

