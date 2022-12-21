import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Checkbox} from 'react-native-paper';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../ScrennHeader/BackButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {AppColor} from '../../assets/colors/AppColor';
import NeoTextInput from '../../components/NeoMorphTextInput/NeoTextInput';

const SignUp = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
        <View
          style={{width: wp('100'), height: hp('100'), alignSelf: 'center'}}>
          <BackButton onPress={() => props.navigation.goBack()}>
            {'Sign Up'}
          </BackButton>
          <View style={styles.views}>
            <Text style={styles.text}>Fullname</Text>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'default'}
              placeholder={'Enter Your Name'}
            />
          </View>
          <View style={styles.views}>
            <Text style={styles.text}>Email</Text>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Enter your Email'}
            />
          </View>
          <View style={styles.views}>
            <Text style={styles.text}>Password</Text>
            <NeoTextInput
              width={wp('90')}
              keyboardType={'default'}
              // maxLength={10}
              secureTextEntry={true}
              placeholder={'Enter your Password'}
            />
            <Icon
              style={styles.icon}
              name="eye-slash"
              size={13}
              color={'black'}
            />
          </View>
          <View style={{marginLeft: wp(6), marginTop: hp(3)}}>
            <Checkbox status="checked" color="#c28cde" />
            <Text
              style={{
                position: 'absolute',
                marginHorizontal: wp(9.5),
                marginTop: hp(1.2),
                fontFamily: 'Poppins-Regular',
                color: 'black',
              }}>
              I agree with
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: wp(32.5),
                marginTop: hp(1),
                color: 'black',
                fontFamily: 'Poppins-Bold',
              }}>
              terms
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: wp(45.5),
                marginTop: hp(1.2),
                color: 'black',
              }}>
              and
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: wp(53),
                marginTop: hp(1),
                color: 'black',
                fontFamily: 'Poppins-Bold',
              }}>
              privacy
            </Text>
          </View>
          <View style={styles.viewSignUpbutton}>
            <TouchableOpacity>
              <NeoButton
                lightShadowColor={AppColor.white}
                width={wp('83')}
                height={hp('6')}
                borderRadius={wp('15')}
                backgroundColor={AppColor.primary}>
                <Text style={{color: 'white', fontFamily: 'Poppins-SemiBold'}}>
                  Sign Up
                </Text>
              </NeoButton>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: hp(1),
                textAlign: 'center',
                marginLeft: wp(20),
                marginTop: wp('5'),
              }}>
              Or
            </Text>
          </View>
          <View style={{marginLeft: wp(8.5), marginTop: hp(1)}}>
            <TouchableOpacity>
              <NeoButton
                lightShadowColor={AppColor.white}
                darkShadowColor={AppColor.black}
                marginTop={wp('4')}
                width={wp('83')}
                height={hp('6')}
                borderRadius={wp('15')}
                backgroundColor={AppColor.whiteShade}>
                <Image
                  style={styles.image}
                  source={require('../../assets/images/google.jpg')}
                />
                <View style={styles.SignInButton}>
                  <Text style={styles.SignInText}>Sign in With this</Text>
                </View>
              </NeoButton>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: hp(2),
              marginRight: wp(10),
            }}>
            <Text style={{fontFamily: 'Poppins-Light'}}>
              Already have an Account?
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', marginLeft: wp(52)}}
              onPress={() => props.navigation.goBack()}>
              <Text style={{color: 'black', fontFamily: 'Poppins-Medium'}}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  inputs: {
    width: wp(84),
    marginTop: hp(1),
    borderRadius: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  views: {
    width: wp('90'),
    alignSelf: 'center',
    marginTop: hp(5),
  },
  icon: {
    position: 'absolute',
    marginVertical: hp(7.5),
    marginLeft: wp(75),
  },
  viewSignUpbutton: {
    width: wp(64),
    alignSelf: 'center',
    marginTop: hp(3),
    marginRight: wp(19),
  },
  SignUpbutton: {
    backgroundColor: '#c28cde',
    width: wp('83'),
    height: hp('6'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('15'),
  },
  SignInButton: {
    width: wp('35'),
    height: hp('6'),
    justifyContent: 'center',
    marginLeft: wp('7'),
  },
  image: {
    width: wp(5),
    height: hp(3),
    position: 'absolute',
    left: 0,
    marginLeft: wp('20'),
  },
  SignInText: {
    fontSize: wp('3.5'),
    fontFamily: 'Poppins-SemiBold',
  },
});
