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
import BackButton from './BackButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const SignUp = props => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={{width: wp('100'),height: hp('100'), alignSelf: 'center'}}>
          <BackButton onPress={() => props.navigation.goBack()}>
            {'Sign Up'}
          </BackButton>
          <View style={styles.views}>
            <Text style={styles.text}>Fullname</Text>
            <TextInput
              style={styles.inputs}
              keyboardType="default"
              placeholder="Enter Your Name"
              backgroundColor="white"></TextInput>
          </View>
          <View style={styles.views}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.inputs}
              keyboardType="email-address"
              selectionColor={'#c28cde'}
              placeholder="Enter your Email"
              backgroundColor="white"></TextInput>
          </View>
          <View style={styles.views}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.inputs}
              keyboardType="default"
              // maxLength={10}
              secureTextEntry={true}
              placeholder="Enter your Password"
              backgroundColor="white"></TextInput>
            <Icon
              style={styles.icon}
              name="eye-slash"
              size={13}
              color={'black'}
            />
          </View>
          <View style={{marginLeft: wp(6), marginTop: hp(3)}}>
            <Checkbox status="checked" />
            <Text
              style={{
                position: 'absolute',
                marginHorizontal: wp(9.5),
                marginTop: hp(1.2),
                fontFamily: 'Poppins-Regular',
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
            <Text style={{position: 'absolute', marginLeft: wp(45.5), marginTop: hp(1.2)}}>
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
            <TouchableOpacity style={styles.SignUpbutton}>
              <Text style={{color: 'white', fontFamily: 'Poppins-SemiBold'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
            <Text style={{marginTop: hp(1), textAlign: 'center', marginLeft: wp(20)}}>
              Or
            </Text>
          </View>
          <View style={{marginLeft: wp(8.5), marginTop: hp(1)}}>
            <TouchableOpacity style={styles.SignInButton}>
              <Image
                style={styles.image}
                source={require('../assets/images/google.jpg')}
              />
              <Text style={styles.SignInText}>Sign in With this</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', marginTop: hp(2), marginRight: wp(10)}}>
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
    marginLeft: wp(8.5),
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
    alignItems: 'center',
    backgroundColor: '#c28cde',
    width: wp(83),
    padding: 9,
    borderRadius: 20,
  },
  SignInButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: wp(83),
  },
  image: {
    width: wp(5),
    height: hp(3),
    marginLeft: wp(20),
  },
  SignInText: {
    position: 'absolute',
    marginLeft: wp(30),
    marginTop: hp(1.5),
    fontFamily: 'Poppins-SemiBold',
  },
});
