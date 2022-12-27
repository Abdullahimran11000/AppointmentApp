import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColor';

const SearchDoctorStyle = StyleSheet.create({
  neoMorphView: {
    marginLeft: wp('-25'),
    width: wp('65'),
    height: hp('6'),
    borderRadius: wp('6'),
    shadowRadius: 4,
    backgroundColor: AppColor.whiteShade,
  },
  searchTextInput: {
    width: wp('50'),
    fontFamily: 'Poppins-Medium',
    fontSize: wp('4'),
    color: AppColor.blackOpacity4,
    marginBottom: wp('-1.5'),
  },

  ModalStyle: {
    borderRadius: wp('10'),
    overflow: 'hidden',
    backgroundColor: AppColor.white,
    width: wp('90'),
  },

  ModalViewStyle: {
    width: wp('80'),
    marginHorizontal: wp('5'),
  },

  ModalText: {
    marginLeft: wp('6'),
    marginTop: wp('5'),
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.black,
  },

  SelectListBoxStyle: {
    borderRadius: wp('4'),
    borderColor: AppColor.white,
    backgroundColor: AppColor.white,
    fontFamily: 'Poppin-Bold',
  },
  DoneButtonView: {marginLeft: wp('5')},
  DoneButtonStyle: {
    width: wp('79'),
    height: hp('7.7'),
    backgroundColor: 'rgba(240, 122, 199,0.7)',
    borderRadius: wp('4'),
  },
  DoneButtonTextView: {justifyContent: 'center', alignSelf: 'center'},
  DoneButtonTextStyle: {marginVertical: wp('4'), fontFamily: 'Poppins-Medium'},

  ConsultationText: {
    marginLeft: wp('10'),
    marginTop: wp('5'),
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.black,
  },

  SelectPriceListBoxStyle: {
    borderRadius: wp('4'),
    width: wp('81.5'),
    marginLeft: wp('4'),
    borderColor: AppColor.white,
    backgroundColor: AppColor.white,
  },

  ApplyButtonStyle: {
    width: wp('79'),
    height: hp('7.7'),
    backgroundColor: AppColor.primary,
    borderRadius: wp('4'),
  },

  DoctorFlatListView: {width: wp('90'), alignSelf: 'center'},
});

export {SearchDoctorStyle};
