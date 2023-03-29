import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../colors/AppColor';

const AppointmentStyle = StyleSheet.create({
  opcaityView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: wp('10'),
    flex: 9,
  },

  opacityButton: {
    borderRadius: 20,
    width: wp(28),
    height: hp(5),
    // backgroundColor: 'white',
    shadowRadius: 4,
  },
  opacityTouchableButton: {
    borderRadius: 20,
    width: wp(28),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: wp('3.5'),
    fontFamily: 'Poppins-SemiBold',
    color: AppColor.blackOpacity6,
  },
  doctorImage: {
    width: wp(17),
    height: wp(20),
    borderRadius: wp('100'),
    marginRight: wp(1),
  },

  doctorText: {fontFamily: 'Poppins-SemiBold', color: AppColor.black},
  doctorCategory:{fontFamily:'Poppins-SemiBold',fontSize:wp(3.3)},

  secondDoctorText: {marginLeft: wp(-6), marginVertical: wp(-1),fontFamily:'Poppins-SemiBold',color:AppColor.black,fontSize:wp(3.2)},

  secondFooterView: {
    marginTop: hp(3),
    
    // alignItems:'center',
    // justifyContent:'center',
    width: wp(83),
    height: hp(5),
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf:'center'
  },

  footerOpcaityView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: wp(5),
  },

  footerOpacityButton: {
    borderRadius: 20,
    width: wp(35),
    height: hp(6),
    backgroundColor: 'rgba(207, 66, 195,0.4)',
  },

  footerButtonText: {
    textAlign: 'center',
    marginVertical: hp(1.2),
    fontFamily: 'Poppins-Medium',
    color: AppColor.white,
  },
});

export {AppointmentStyle};
