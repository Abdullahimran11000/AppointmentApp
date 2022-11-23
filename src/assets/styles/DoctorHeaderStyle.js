import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const DoctorHeaderStyle = StyleSheet.create({
    headerView: {display: 'flex',flex: 1, flexDirection: 'row',marginTop: 15, justifyContent: 'center'},
    iconView: {position: 'absolute', left: 0},
    iconViews: {position: 'absolute', right: 0},
    touchableView: {width: wp('10') , height:wp('10') , backgroundColor: '#ebe6e6', borderRadius: 20, alignItems: 'center'},
    headingText: {fontFamily: 'Poppins-Bold', fontSize: 16, color: "black"},
})
export {DoctorHeaderStyle}
