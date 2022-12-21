import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';

const DoctorDepartmentStyle = StyleSheet.create({
    mainView: {backgroundColor: AppColor.whiteShade, height: hp('100')},
    flatListView: {marginTop: wp('4'), width: wp('100'), justifyContent: 'center', alignItems: "center"}

});

export {DoctorDepartmentStyle};
