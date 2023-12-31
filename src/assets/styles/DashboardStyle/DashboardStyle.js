import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';

const DashboardStyle = StyleSheet.create({

    scrollViewStyle: { height: hp('100')},
    headCont: {flex:1,width: wp('90'), height: hp('10'), marginTop: wp('4.5'), marginLeft:  wp('4.5'), marginRight:  wp('4.5'), alignSelf: 'center'},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContMenuCont: {width: wp('11.5'), height: wp('11.5'), borderRadius: wp('14'), position: 'absolute', left:wp('0'), justifyContent: 'center'},
    headContImageCont: {width: wp('11.5'), height: wp('11.5'), borderRadius: wp('14'), position: 'absolute', left:wp('10')},
    headContImageStyle: {width: wp('11.5'), height: wp('11.5'), borderRadius: wp('14')},
    headContMiddleCont: {width: wp('60'), position: 'absolute', left: wp('25')},
    middleInnerFirstCont: {marginTop: wp('1.3')},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Bold', fontSize:wp('4.5'), color: AppColor.black},
    middleInnerSecondCont: {marginTop:wp('-1.4')},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize:wp('3.3'), color: AppColor.blackOpacity4},
    headContLastCont: {position: 'absolute', right: wp('2.5'), top: wp('4.5')},
    notificationButton: {width: wp('10'), height: wp('10'), shadowRadius: 4, borderRadius: wp('12'), backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'},
    searchCont: {width: wp('90'), height: hp('8'), borderRadius: wp('8'), marginTop: wp('5'), marginLeft: wp('4.5'), marginRight: wp('4.5'), alignSelf: 'center'},
    searchInnerCont: {display: 'flex', flex: 1, flexDirection: 'row',alignItems: 'center', justifyContent: 'center'},
    seacrhIconOneInnerCont: {width: wp('8'), height: hp('6'), position: 'absolute', marginLeft: wp('3.5'), justifyContent: 'center'},
    searchTextInputCont: {width: wp('50'), height: hp('6'), justifyContent: 'center', alignItems: 'center', marginLeft: wp('12')},
    searchIconTwoCont: {position: 'absolute' , right: wp('2.5'),},
    searchIconTwoTouchable: {width: wp('9'), height: wp('9'), borderRadius: wp('9'), backgroundColor: AppColor.white, alignItems: 'center', justifyContent: 'center'},
    searchNeoView: {marginLeft: wp("-25"), width:wp('65') , height:hp('6'), borderRadius: wp('6'), shadowRadius: 4, backgroundColor: AppColor.whiteShade},
    searchTextInput: {width: wp('50') , fontFamily: 'Poppins-Medium', fontSize: wp('4'), color: AppColor.blackOpacity4, marginBottom: wp('-1.5')},
    filterButton: {width: wp('10'), height: wp('10'), shadowRadius: 4, borderRadius: wp('12'), backgroundColor: AppColor.whiteShade, alignItems: 'center', justifyContent: 'center'},

    neoCard: {width: wp('90'), height: hp('25'), borderRadius: wp('8'), shadowRadius: 4, backgroundColor: AppColor.whiteShade , margin: wp('4')},
    dashCard: {width: wp("90"), height: hp('25'), borderRadius: wp('8'), alignSelf: 'center',},
    leftCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    leftContInnerCont: {left: wp('6')},
    leftContFirstHeading: {width: wp('45')},
    leftContFirstHeadingText: {fontFamily: 'Poppins-Bold', color: 'white', fontSize: wp('3.5')},
    leftContSecondHeading: {width: wp('40'), marginTop: wp('2')},
    leftContSecondHeadingText: {fontFamily: 'Poppins-SemiBold', color: AppColor.white, fontSize: wp('2.5'), textAlignVertical: 'center'},
    dashContImage: {width: wp('40'), height: hp('25')},
    touchableView: {marginTop: wp('8')},
    neoDiscoverButton: {width: wp('22'), height: wp('8'), borderRadius: wp('5'), shadowRadius: 4, backgroundColor: AppColor.purpleOpacity1, justifyContent: 'center', alignItems: 'center'},
    discoverButtonText: {fontFamily: "Poppins-Bold", fontSize: wp('3'), color: AppColor.white},
    categoriesView: {width: wp('100'), height: hp('22')},
    doctorsView: {marginLeft: wp("4.5")},
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
