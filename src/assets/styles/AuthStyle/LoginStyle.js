import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import App from '../../../../App';
import {AppColor} from '../../colors/AppColor';

const LoginStyle = StyleSheet.create({
  MainView: {flex: 1},

  headerView: {alignSelf:'center' , color:AppColor.black , fontFamily:'Poppins-Bold' , marginTop:hp(3)  ,fontSize:wp('5')},
  
  inputFieldsView: {
    marginTop: wp('15'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextStyle: {
    marginLeft: wp('2'),
    color: AppColor.black,
    fontFamily: 'Poppins-Bold',
  },

  ForgotText: {
    textAlign: 'right',
    alignSelf: 'flex-end',
    marginRight: wp(5),
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },

  iconOpacity: {
    width: wp('5'),
    height: hp('5'),
    position: 'absolute',
    alignSelf: 'flex-end',
    marginVertical: wp('13'),
  },

  MainLoginButtonView: {
    marginTop:wp('4'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchableLogin: {
    borderRadius: wp('5'),
    width: wp('84'),
    backgroundColor: '#c38cde',
  },

  LogInButtonView: {
    textAlign: 'center',
    height: hp('6'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {color: AppColor.white, fontFamily: 'Poppins-SemiBold'},

  orText: {
    color: AppColor.black,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: wp('2'),
  },

  TouchableGoogle: {
    borderRadius: wp('15'),
    width: wp('87'),
    height: hp('6'),
    backgroundColor: AppColor.white,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  GoogleImage: {
    width: wp('5'),
    height: hp(3),
    marginLeft: wp(20),
    position: 'absolute',
    backgroundColor:AppColor.white
  },

  GoogleText: {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    marginLeft:wp('3')
  },

  LastView:{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:wp('3')},
  SignUpText:{fontFamily: 'Poppins-SemiBold', color: 'black'}
});

export {LoginStyle};
