import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp  , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ScheduleStyle = StyleSheet.create({

    calenderView: {width: wp(100), marginTop: hp(1), height: hp(42), alignSelf: 'center',},
    headingFirst: {fontFamily: 'Poppins-Bold',color: 'black',fontSize: 14,marginLeft: wp(5),marginTop: hp(5)},
    headingsecond: {fontFamily: 'Poppins-Bold',color: 'black',width: wp(100),marginLeft: wp('10'),alignSelf: 'center',marginTop: 15,},
    viewFirst: {flexDirection: 'row',justifyContent: 'space-evenly',marginTop: hp(2),width: wp(100),alignSelf: 'center'},
    firstButton: {backgroundColor: '#E8E4E4', width: wp(27.5), marginLeft: wp(8), borderRadius: 20, justifyContent: 'center',},
    buttons: {backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8),padding: 3,borderRadius: 20,justifyContent: 'center',},
    buttonsTextRow1: {color: 'black',fontFamily: 'Poppins-Regular',fontSize: 12,textAlign: 'center',},
    buttonsTextRow2: {color: 'black', fontFamily: 'Poppins-Regular',fontSize: 12,textAlign: 'center',justifyContent:'center',},
    buttonsTextRow3: {color: 'black',fontFamily: 'Poppins-Regular',fontSize: 12,textAlign: 'center',},
    buttonWithMarginRight: {backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8),padding: 3,borderRadius: 20,marginRight: wp(8),},
    buttonsOfAppointmentDetails: {backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8.5),padding: 3,borderRadius: 20,},
    row2MainView: {flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10, width: wp(100), alignSelf: 'center'},
    row2ButtonStyle: {backgroundColor: '#E8E4E4', width: wp(27.5), marginLeft: wp(8.5), padding: 3, borderRadius: 20,
      },
    row2Button3Style:{backgroundColor: '#E8E4E4',width: wp(27.5),marginLeft: wp(8.5),padding: 3,borderRadius: 20,marginRight: wp(8.5),},
    modal: {width: wp(90),height: hp(80),overflow: 'hidden',borderRadius: wp('10'),alignItems: 'center',justifyContent: 'center',backgroundColor: 'white',},
    modalContainer: {flex: 1,backgroundColor: 'rgba(0,0,0,0.7)',position: 'absolute',top: 0,right: 0,bottom: 0,left: 0,},
})

export {ScheduleStyle}