import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../colors/AppColor';

const DashboardStyle = StyleSheet.create({

    headCont: {width: wp('90'), height: hp('10'), marginTop: wp('4.5'), marginLeft:  wp('4.5'), marginRight:  wp('4.5'), alignSelf: 'center'},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), backgroundColor:'rgba(255, 255, 255, 0.7)', position: 'absolute', left:0},
    headContImageStyle: {width: wp('13'), height: wp('13'), borderRadius: wp('13')},
    headContMiddleCont: {width: wp('60'), position: 'absolute', left: wp('18')},
    middleInnerFirstCont: {marginTop: wp('1.3')},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Bold', fontSize:wp('4.5'), color: AppColor.black},
    middleInnerSecondCont: {marginTop:wp('-1.4')},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize:wp('3.3'), color: 'rgba(0, 0, 0, 0.4)'},
    headContLastCont: {position: 'absolute', right: wp('4.5'), top: wp('4.9')},
   
    searchCont: {width: wp('90'), height: hp('8'), borderRadius: wp('8'), marginTop: wp('5'), marginLeft: wp('4.5'), marginRight: wp('4.5'), alignSelf: 'center'},
    searchInnerCont: {display: 'flex', flex: 1, flexDirection: 'row',alignItems: 'center', justifyContent: 'center'},
    searchIconOneCont: {width: wp('65'), height: hp('6'), borderRadius: wp('6'), backgroundColor: AppColor.white, position: 'absolute', left: 0, justifyContent: 'center'},
    seacrhIconOneInnerCont: { marginLeft: wp('3')},
    searchTextInputCont: {width: wp('50'), marginLeft: wp('-18'),},
    searchIconTwoCont: {position: 'absolute' , right: wp('3.5')},
    searchIconTwoTouchable: {width: wp('9'), height: wp('9'), borderRadius: wp('9'), backgroundColor: AppColor.white, alignItems: 'center', justifyContent: 'center'},
    
    dashCard: {width: wp("90"), height: hp('25'), borderRadius: wp('8'), alignSelf: 'center', marginTop: wp('6')},
    leftCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    leftContInnerCont: {left: wp('7.5')},
    leftContFirstHeading: {width: wp('50')},
    leftContFirstHeadingText: {fontFamily: 'Poppins-Bold', color: 'white', fontSize: wp('4.5')},
    leftContSecondHeading: {width: wp('40'), marginTop: wp('2.6')},
    leftContSecondHeadingText: {fontFamily: 'Poppins-SemiBold', color: AppColor.white, fontSize: wp('3.7'), textAlignVertical: 'center'},
    dashContImage: {width: wp('40'), height: hp('25')},
    
    doctorCardImage: {width: wp('31'), height: wp('36')},
    doctorHeaderCont: {display: 'flex', flex:1, flexDirection: 'row'},
    doctorHeaderContInnerCont: {position: 'absolute', right:wp('-1') , marginTop: wp('4.5')},
    doctorHeaderContTouchable: {width: wp('6'), height: wp('6'), borderRadius: wp('6'), backgroundColor: AppColor.whiteOpacity5, alignItems: 'center', justifyContent: 'center'},
    doctorLowerContFirstHeading: {marginTop: wp('2')},
    doctorLowerContFirstHeadingText: {fontFamily: 'Poppins-Bold', fontSize: wp('3.7'), color: AppColor.black},
    doctorLowerContSecondHeadingText: {fontFamily: 'Poppins-Light', fontSize: wp('3.3'), color: AppColor.blackOpacity5},

    doctorLowerFlexView: {display: 'flex', flex: 1, flexDirection: 'row', marginTop: wp('-4')},
    doctorLowerFlexViewInnerView: {display: 'flex' , flex: 1, flexDirection: "row"},
    doctorLowerFlexTextOne: {fontFamily: 'Poppins-Bold', fontSize: wp('3'), color: AppColor.black, marginLeft: wp('1')},
    doctorLowerFlexTextTwo: {fontFamily: 'Poppins-Bold', fontSize: wp('3'), color: AppColor.black, marginLeft: wp('1')}

});

export {DashboardStyle};
