import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DashboardStyle = StyleSheet.create({

    dashCard: {width: wp("90"), height: hp('25'), borderRadius: 25, alignSelf: 'center', marginTop: 50},
    leftContainer: {display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'},
    leftContainerInnerContainer: {left: 20},
    leftContainerFirstHeading: {width: wp('50')},
    leftContainerFirstHeadingText: {fontFamily: 'Poppins-Bold', color: 'white', fontSize: 16},
    leftContainerSecondHeading: {width: wp('40'), marginTop:8},
    leftContainerSecondHeadingText: {fontFamily: 'Poppins-SemiBold', color: 'white', fontSize: 13, textAlignVertical: 'center'},
    dashContainerImage: {width: wp('40'), height: hp('25')},
    doctorCard: {width: wp("35"), height: wp('35'), borderRadius: 30, alignSelf: 'center', marginTop: 20},
    doctorContainer: {marginLeft:5},
    doctorCardImage: {width: wp('30'), height: hp('20')},
    doctorHeaderContainer: {display: 'flex', flex:1, flexDirection: 'row'},
    doctorHeaderContainerInnerContainer: {position: 'absolute', right:-5 , marginTop: 15},
    doctorHeaderContainerTouchable: {width: wp('6'), height: wp('6'), borderRadius: wp('6'), backgroundColor: 'rgba(255, 255, 255, 0.5)', alignItems: 'center', justifyContent: 'center'},
    
});

export {DashboardStyle};
