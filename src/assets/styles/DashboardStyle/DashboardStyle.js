import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';

const DashboardStyle = StyleSheet.create({

    headCont: {width: wp('90'), height: hp('10'), marginTop: wp('4.5'), marginLeft:  wp('4.5'), marginRight:  wp('4.5'), alignSelf: 'center'},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), position: 'absolute', left:0},
    headContImageStyle: {width: wp('13'), height: wp('13'), borderRadius: wp('13')},
    headContMiddleCont: {width: wp('60'), position: 'absolute', left: wp('18')},
    middleInnerFirstCont: {marginTop: wp('1.3')},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Bold', fontSize:wp('4.5'), color: AppColor.black},
    middleInnerSecondCont: {marginTop:wp('-1.4')},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize:wp('3.3'), color: 'rgba(0, 0, 0, 0.4)'},
    headContLastCont: {position: 'absolute', right: wp('2.5'), top: wp('4.5')},
   
    searchCont: {width: wp('90'), height: hp('8'), borderRadius: wp('8'), marginTop: wp('5'), marginLeft: wp('4.5'), marginRight: wp('4.5'), alignSelf: 'center'},
    searchInnerCont: {display: 'flex', flex: 1, flexDirection: 'row',alignItems: 'center', justifyContent: 'center'},
    seacrhIconOneInnerCont: {width: wp('8'), height: hp('6'), position: 'absolute', marginLeft: wp('3.5'), justifyContent: 'center'},
    searchTextInputCont: {width: wp('50'), height: hp('6'), justifyContent: 'center', alignItems: 'center', marginLeft: wp('12')},
    searchIconTwoCont: {position: 'absolute' , right: wp('2.5')},
    searchIconTwoTouchable: {width: wp('9'), height: wp('9'), borderRadius: wp('9'), backgroundColor: AppColor.white, alignItems: 'center', justifyContent: 'center'},
    
    dashCard: {width: wp("90"), height: hp('25'), borderRadius: wp('8'), alignSelf: 'center', marginTop: wp('0')},
    leftCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    leftContInnerCont: {left: wp('7.5'), marginTop: wp('0')},
    leftContFirstHeading: {width: wp('50')},
    leftContFirstHeadingText: {fontFamily: 'Poppins-Bold', color: 'white', fontSize: wp('4.5')},
    leftContSecondHeading: {width: wp('40'), marginTop: wp('2')},
    leftContSecondHeadingText: {fontFamily: 'Poppins-SemiBold', color: AppColor.white, fontSize: wp('3'), textAlignVertical: 'center'},
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
