import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MessageStyle = StyleSheet.create({

    headCont: {width: wp('90'), height: hp('10'), marginTop: wp('4'), marginLeft: wp('4'), marginRight: wp('4'), marginBottom: wp('0'), alignSelf: 'center', backgroundColor: 'rgba(195, 140, 222, 0.3)', borderRadius: wp('4')},
    headContInnerCont: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    headContImageCont: {width: wp('13'), height: wp('13'), borderRadius: wp('13'), backgroundColor:'rgba(255, 255, 255, 0.7)', position: 'absolute', left: wp('2')},
    headContImageStyle: {width: wp('13'), height: wp('13'), borderRadius: wp('13')},
    headContMiddleCont: {width: wp('60'), position: 'absolute', left: wp('20')},
    middleInnerFirstCont: {marginTop: wp(1)},
    middleInnerContFirstHeading: {fontFamily: 'Poppins-Bold', fontSize: wp('4.2'), color: 'black'},
    middleInnerSecondCont: {marginTop: wp(-0.8)},
    middleInnerContSecondHeading: {fontFamily: 'Poppins-Medium', fontSize: wp("3.2"), color: 'rgba(0, 0, 0, 0.4)'},
    headContLastCont: {position: 'absolute', right: wp('4'), top: wp("4.5")},
    headContLastContText: {fontFamily: "Poppins-Light", fontSize: wp('3'), color: 'grey'},
    rightButtonsViews: {width: wp('15'), height: hp('10'), borderRadius: wp('4'), backgroundColor: 'rgba(195, 140, 222, 0.3)', marginTop: wp('4'), marginBottom: wp('1'), justifyContent: 'center'},
    rightButtonIcons: {alignSelf: 'center', color: "rgba(247, 25, 25,0.4)"}
})

export {MessageStyle}