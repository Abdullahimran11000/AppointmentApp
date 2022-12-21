import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppColor } from '../../../colors/AppColor';

const TextInputStyle = StyleSheet.create({
  inputStyle: {
    width: wp('90'),
    height: hp('7'),
    borderRadius: wp('3'),
    backgroundColor: AppColor.whiteShade,
    padding: wp('3'),
    fontFamily: 'Poppins-Light',
    alignSelf: 'center'
  },
});

export {TextInputStyle};