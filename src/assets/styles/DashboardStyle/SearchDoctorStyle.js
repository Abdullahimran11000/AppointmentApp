import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';

const SearchDoctorStyle = StyleSheet.create({

    neoMorphView: {marginLeft: wp("-25"), width:wp('65') , height:hp('6'), borderRadius: wp('6'), shadowRadius: 4, backgroundColor: AppColor.whiteShade,},
    searchTextInput: {width: wp('50') , fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: AppColor.blackOpacity4, marginBottom: wp('-1.5')},

})

export {SearchDoctorStyle}