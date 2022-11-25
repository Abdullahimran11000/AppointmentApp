import {StyleSheet} from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import {AppColors} from '../colors/AppColor';

const DoctorInfoStyle = StyleSheet.create({
  mainView: {backgroundColor: AppColors.primary , height: heightPercentageToDP('100')},
});

export {DoctorInfoStyle};