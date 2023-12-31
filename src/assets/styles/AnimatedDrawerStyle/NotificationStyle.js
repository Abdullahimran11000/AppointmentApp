import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';

const NotificationStyle = StyleSheet.create({
    headerMainView: {alignSelf: 'center'},
    notificationsBar: {display: 'flex',flexDirection: 'row',backgroundColor: AppColor.whiteShade,width: wp(90),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,},
    headCont: {width: wp('90'), height: hp('9'), marginTop: wp('4'), marginLeft: wp('4'), marginRight: wp('4'), marginBottom: wp('0'), alignSelf: 'center', backgroundColor: AppColor.purpleOpacity, borderRadius: wp('4'), justifyContent:"center"},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), backgroundColor:AppColor.whiteOpacity8, position: 'absolute', left: wp('2')},
    headContMiddleCont: {width: wp('60'), position: 'absolute', left: wp('20')},
    renderItemHeaderFontFirst: {fontFamily:'Poppins-SemiBold',color:AppColor.black,top:hp(1),},
    renderItemHeaderFontSecond: {position: 'absolute', right: 0},
    renderItemHeaderFontSecondTextStyle: {fontFamily:'Poppins-Regular',color:AppColor.blackOpacity4,top:hp(1),},
    iconstyle:{alignSelf:'center',top: hp(2)},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Bold', fontSize: wp('3'), color: AppColor.black},
    middleInnerSecondCont: {marginTop: wp(-0.8)},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize: wp("3.2"), color: AppColor.blackOpacity4},
    mainView: {width: wp('100'), height: hp('100'), alignSelf: 'center',backgroundColor:AppColor.whiteShade},
    innerItems: {width: wp('90'), height: hp('9'), marginTop: wp('4'), marginLeft: wp('2.5'), marginRight: wp('4'), marginBottom: wp('0'), alignItems: 'center', backgroundColor: AppColor.whiteShade, borderRadius: wp('4'), justifyContent:"center",shadowRadius:3},
    header: {display: 'flex',flexDirection: 'row',backgroundColor: AppColor.whiteShade,width: wp(90),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,shadowRadius:4},
    headerbackButton: {width: wp('10'), height: wp('10'), borderRadius: wp('9'), backgroundColor: AppColor.white, marginLeft: wp('2'), alignItems: 'center', justifyContent: 'center',},
    headerText:{fontFamily: 'Poppins-SemiBold', width: wp('40'), marginLeft: wp('20'), fontSize: 14, color: AppColor.black},
    firstContainerOfMainView: {backgroundColor: AppColor.whiteShade, height: hp(40), width: wp(95), alignSelf: 'center', borderRadius: 20, overflow: 'hidden',},
    innerViewOfFirstContainer: {height: hp(5),justifyContent: 'center', width: wp(90), alignSelf: 'center',},
    secondContainerOfMainView: {backgroundColor: AppColor.whiteShade, height: hp(40), width: wp(95), alignSelf: 'center', borderRadius: 20, marginBottom: hp(1), marginTop: hp(3), overflow: 'hidden', },
    innerViewOfSecondContainer:{height: hp(5), justifyContent: 'center', width: wp(90), alignSelf: 'center',},

   
    
})

export {NotificationStyle}