import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NotificationStyle = StyleSheet.create({

    SearchBar: {display: 'flex',flexDirection: 'row',backgroundColor: 'rgba(195, 140, 222, 0.2)',width: wp(90),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,},

    headCont: {width: wp('90'), height: hp('9'), marginTop: wp('4'), marginLeft: wp('4'), marginRight: wp('4'), marginBottom: wp('0'), alignSelf: 'center', backgroundColor: 'rgba(195, 140, 222, 0.4)', borderRadius: wp('4'), justifyContent:"center"},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), backgroundColor:'rgba(255, 255, 255, 0.8)', position: 'absolute', left: wp('2')},
    // headContImageStyle: {width: wp('13'), height: wp('13'), borderRadius: wp('13')},
    // headIcon:{justifyContent:'center'},
    headContMiddleCont: {width: wp('60'), position: 'absolute', left: wp('20')},
    // middleInnerFirstCont: {marginTop: wp(1)},
    renderItemheaderfontfirst: {fontFamily:'Poppins-SemiBold',color:'black',top:7,},
    renderItemheaderfontsecond: {fontFamily:'Poppins-Regular',color:'rgba(0,0,0,0.4)',top:7,},
    iconstyle:{alignSelf:'center',top: hp(2)},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Bold', fontSize: wp('3'), color: 'black'},
    middleInnerSecondCont: {marginTop: wp(-0.8)},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize: wp("3.2"), color: 'rgba(0, 0, 0, 0.4)'},
    
   
    
})

export {NotificationStyle}