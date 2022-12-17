import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MapsStyle = StyleSheet.create({

    firstView: {flex: 2, alignSelf: 'center'},
    middleView: {flex: 8,width: wp(100),height: hp(100),alignSelf: 'center',},
    lastView: {flex: 4,alignItems: 'center',width: wp(100),height: hp(100),},
    cardView: {marginTop: hp(1), marginLeft: wp(3)},
    cardcover: {marginTop: hp(0.3),width: wp(28),height: hp(17.3),borderRadius: 15,},
    SearchBar: {display: 'flex',flexDirection: 'row',backgroundColor: 'white',width: wp(80),height: hp(7),margin: hp(2.5),alignItems: 'center',borderRadius: 30,},
    footer: {width: wp(80),height: hp(20),borderRadius: 20,},
    backbutton: { width: wp('10'),height: wp('10'),borderRadius: wp('9'),backgroundColor: 'rgba(0,0,0,0.07)',marginLeft: wp('2'),alignItems: 'center',justifyContent: 'center'},
    textinput: {fontFamily: 'Poppins-Regular',width: wp('40'),marginLeft: wp('1'),fontSize: 14},
    cardInnerButtonStyle: {  marginTop: hp(13),position: 'absolute',marginLeft: wp(30),backgroundColor: '#F6ECF4',padding: 6,borderRadius: 10,width: wp(20),},
    cardInnerButtonTextStyle : {color: '#EEEEEE ',fontSize: 11,fontFamily: 'Poppins-SemiBold',marginLeft: hp(3),},
    iconStyle: {position: 'absolute',width: wp(10),marginTop: hp(13),marginLeft: wp(54),backgroundColor: '#c28cde',padding: 9.2,borderRadius: 10,}
})

export {MapsStyle}