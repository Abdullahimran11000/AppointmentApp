import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AppColor } from '../../colors/AppColor';

const MapsStyle = StyleSheet.create({
    mainView:{width: wp('100'), height: hp('100'), alignSelf: 'center',flex:14},
    firstView: {flex: 2, alignSelf: 'center'},
    innerFirstView: {display: 'flex',flexDirection: 'row',backgroundColor: AppColor.whiteShade,width: wp(80),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: wp('10'), shadowRadius:4},
    middleView: {flex: 8,width: wp(100),height: hp(100),alignSelf: 'center',},
    lastView: {flex: 4,alignItems: 'center'},
    lastViewContainer: {width: wp(84),height: hp(23),borderRadius: 20,backgroundColor: AppColor.whiteShade,justifyContent: 'center',alignItems: 'center',shadowRadius: 20,},
    iconStyle: {marginLeft: wp(9), marginBottom: hp(0.5)},
    cardView: {marginTop: hp(1), marginLeft: wp(3)},
    cardTitleStyle: {marginLeft:wp(26.5),alignItems:'center',justifyContent:'center',position: 'absolute'},
    cardContent: {marginLeft: wp(1),position: 'absolute'},
    cardParagraph: {marginTop: hp(6),width:wp(40),marginHorizontal:wp(26)},
    cardcover: {marginTop: hp(0.3),width: wp(28),height: hp(17.3),borderRadius: 15,},
    textFirst: { fontFamily: 'Poppins-SemiBold'},
    textSecond: {fontSize:wp(3), fontFamily: 'Poppins-Regular', color: AppColor.blackOpacity3},
    locationArrowIcon: {position: 'absolute',marginLeft: wp(1),marginTop: hp(0.5),},
    innerLastViewFirstButton: { marginTop: hp(13), position: 'absolute', marginLeft: wp(30), backgroundColor: AppColor.whiteDark, height: hp(4), borderRadius: 10, width: wp(20), shadowRadius: '2', justifyContent: 'center', alignItems: 'center',},
    innerLastViewSecondButton:{position: 'absolute', width: wp(8), marginTop: hp(13.2), backgroundColor: AppColor.primary, height: hp(4), borderRadius: 10, justifyContent: 'center',right:wp(15), alignItems: 'center', shadowRadius: '1.5',},
    SearchBar: {display: 'flex',flexDirection: 'row',backgroundColor: 'white',width: wp(80),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,},
    cardMainView: {width: wp(80),height: hp(20),borderRadius: 20,backgroundColor:AppColor.whiteShade},
    backbutton: { width: wp('10'),height: wp('10'),borderRadius: wp('9'),backgroundColor: AppColor.blackOpacity9,marginLeft: wp('2'),alignItems: 'center',justifyContent: 'center'},
    textinput: {fontFamily: 'Poppins-Regular',width: wp('40'),marginLeft: wp('1'),fontSize: wp(3.4)},
    cardInnerButtonTextStyle : {color: AppColor.black,fontSize: wp(3.3),fontFamily: 'Poppins-SemiBold',marginLeft: hp(2.5),},
    
})

export {MapsStyle}