import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';

const ScheduleStyle = StyleSheet.create({
    firstHeading: {width: wp(87.5), alignSelf: 'center'},
    bookAppointmentButton:{ textAlign: 'center',color: 'white',fontFamily: 'Poppins-SemiBold',},
    lottyView:{ width: wp('48'),height: wp('48'),borderRadius:wp('48'),justifyContent: 'center',alignItems: 'center',backgroundColor: AppColor.whiteShade,shadowRadius: 5,top:hp(1)},
    lottyViewInner:{width: wp('38'),height: wp('38'),borderRadius:wp('38'),backgroundColor: AppColor.whiteShade,shadowRadius: 5,alignItems: 'center',justifyContent: 'center',},
    modalMiddleView:{ fontFamily: 'Poppins-Bold', textAlign: 'center', color: AppColor.black, marginTop: hp(4)},
    modalMiddleView2:{ fontFamily: 'Poppins-Light', fontSize: wp(3.3), textAlign: 'center', color: AppColor.black,},
    modalButtonView:{ padding: wp(2.5), alignItems: 'center', marginVertical: hp(3)},
    calenderView: {width: wp(100), marginTop: hp(1), height: hp(42), alignSelf: 'center',},
    headingFirst: {fontFamily: 'Poppins-Bold',color: AppColor.black,fontSize: wp(4.5),marginTop: hp(8)},
    buttonsTextRow1: {color: AppColor.white,fontFamily: 'Poppins-SemiBold',fontSize: wp(3.6),borderRadius:20},
    buttonsTextRow3: {color: AppColor.white,fontFamily: 'Poppins-SemiBold',fontSize: wp(3.8),borderRadius:20,width:wp(14.5),height:hp(8),backgroundColor:AppColor.primary,textAlign:'center',textAlignVertical:'center'},
    bookAppointmentButtonStyle: {alignItems: 'center',height: hp(15),top:hp(6)},
    modalDoneButton: { textAlign: 'center', color: AppColor.white, fontFamily: 'Poppins-SemiBold', },
    modal: {width: wp(90),height: hp(70),borderRadius: wp('10'),alignItems: 'center',justifyContent: 'center',backgroundColor: AppColor.whiteShade,},
    modalContainer: {backgroundColor: AppColor.blackOpacity7,position: 'absolute',top: 0,right: 0,bottom: 0,left: 0,marginBottom:hp(-5)},
})

export {ScheduleStyle}