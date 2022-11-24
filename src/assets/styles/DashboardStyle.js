import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DashboardStyle = StyleSheet.create({

    headCont: {width: wp('90'), height: hp('10'), marginTop:15, marginLeft: 15, marginRight: 15, marginBottom: -25, alignSelf: 'center'},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), backgroundColor:'rgba(255, 255, 255, 0.7)', position: 'absolute', left:0},
    headContImageStyle: {width: wp('13'), height: wp('13'), borderRadius: wp('13')},
    headContMiddleCont: {width: wp('40'), position: 'absolute', left:65},
    middleInnerFirstCont: {marginTop: 3},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Bold', fontSize:16, color: 'black'},
    middleInnerSecondCont: {marginTop:-5},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize:12, color: 'rgba(0, 0, 0, 0.4)'},
    headContLastCont: {position: 'absolute', right:15, top:17},
   
    searchCont: {width: wp('90'), height: hp('8'), borderRadius: wp('8'), marginTop:32, marginLeft: 15, marginRight: 15, marginBottom: -25, alignSelf: 'center'},
    searchInnerCont: {display: 'flex', flex: 1, flexDirection: 'row',alignItems: 'center', justifyContent: 'center'},
    searchIconOneCont: {width: wp('65'), height: hp('6'), borderRadius: wp('6'), backgroundColor: 'rgba(255, 255, 255, 0.7)', position: 'absolute', left: 0, justifyContent: 'center'},
    seacrhIconOneInnerCont: { marginLeft: 10},
    searchTextInputCont: {width: wp('50'), marginLeft: -70,},
    searchIconTwoCont: {position: 'absolute' , right: 10},
    searchIconTwoTouchable: {width: wp('9'), height: wp('9'), borderRadius: wp('9'), backgroundColor: 'rgba(255, 255, 255, 0.7)', alignItems: 'center', justifyContent: 'center'},
    
    dashCard: {width: wp("90"), height: hp('25'), borderRadius: 25, alignSelf: 'center', marginTop: 50},
    leftCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    leftContInnerCont: {left: 20},
    leftContFirstHeading: {width: wp('50')},
    leftContFirstHeadingText: {fontFamily: 'Poppins-Bold', color: 'white', fontSize: 16},
    leftContSecondHeading: {width: wp('40'), marginTop:8},
    leftContSecondHeadingText: {fontFamily: 'Poppins-SemiBold', color: 'white', fontSize: 13, textAlignVertical: 'center'},
    dashContImage: {width: wp('40'), height: hp('25')},
    
    doctorCard: {width: wp("35"), height: wp('35'), borderRadius: wp('8'), marginTop: 10},
    doctorCont: {marginLeft:5},
    doctorCardImage: {width: wp('30'), height: hp('20')},
    doctorHeaderCont: {display: 'flex', flex:1, flexDirection: 'row'},
    doctorHeaderContInnerCont: {position: 'absolute', right:-5 , marginTop: 15},
    doctorHeaderContTouchable: {width: wp('6'), height: wp('6'), borderRadius: wp('6'), backgroundColor: 'rgba(255, 255, 255, 0.5)', alignItems: 'center', justifyContent: 'center'},
    doctorLowerContFirstHeading: {marginTop: 5},
    doctorLowerContFirstHeadingText: {fontFamily: 'Poppins-Bold', fontSize: 13, color: 'rgba(0, 0, 0, 1)'},
    doctorLowerContSecondHeadingText: {fontFamily: 'Poppins-Light', fontSize: 12, color: 'rgba(0, 0, 0, 0.5)'},
    doctorLowerFlexView: {display: 'flex', flex: 1, flexDirection: 'row'},
    doctorLowerFlexTouchableView: {position: 'absolute', top: 4},
    doctorLowerFlexTextOneView: {position: 'absolute', left: 20, top: 4},
    doctorLowerFlexTextOne: {fontFamily: 'Poppins-Bold', fontSize: 13, color: 'rgba(0, 0, 0, 1)'},
    doctorLowerFlexIconView: {position: 'absolute', right: 50, top: 4},
    doctorLowerFlexTextTwoView: {position: 'absolute', right: 0, top: 4},
    doctorLowerFlexTextTwo: {fontFamily: 'Poppins-Bold', fontSize: 12, color: 'rgba(0, 0, 0, 1)'}

    

});

export {DashboardStyle};
