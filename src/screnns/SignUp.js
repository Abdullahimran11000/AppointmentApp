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
        <View style={{width: wp('100'),height: hp('100')}}>
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
          <View style={{marginLeft: 28, marginTop: 20}}>
            <Checkbox status="checked" />
            <Text
              style={{
                position: 'absolute',
                marginHorizontal: 35,
                marginTop: 8,
                fontFamily: 'Poppins-Regular',
              }}>
              I agree with
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: 118,
                marginTop: 7.5,
                color: 'black',
                fontFamily: 'Poppins-Bold',
              }}>
              terms
            </Text>
            <Text style={{position: 'absolute', marginLeft: 164, marginTop: 8}}>
              and
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: 190,
                marginTop: 7.5,
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
            <Text style={{marginTop: 10, textAlign: 'center', marginLeft: 70}}>
              Or
            </Text>
          </View>
          <View style={{marginLeft: 30, marginTop: 10}}>
            <TouchableOpacity style={styles.SignInButton}>
              <Image
                style={styles.image}
                source={require('../assets/images/google.jpg')}
              />
              <Text style={styles.SignInText}>Sign in With this</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', marginTop: 10, marginRight: 50}}>
            <Text style={{fontFamily: 'Poppins-Light'}}>
              Already have an Account?
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', marginLeft: 186}}
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
    width: 300,
    marginTop: 10,
    borderRadius: 5,
    fontFamily: 'Poppins-SemiBold',
  },
  text: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  views: {
    marginLeft: 30,
    marginTop: 30,
  },
  icon: {
    position: 'absolute',
    marginVertical: 46,
    marginLeft: 270,
  },
  viewSignUpbutton: {
    width: 230,
    alignSelf: 'center',
    marginTop: 30,
    marginRight: 70,
  },
  SignUpbutton: {
    alignItems: 'center',
    backgroundColor: '#c28cde',
    width: 300,
    padding: 9,
    borderRadius: 20,
  },
  SignInButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: 300,
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 70,
  },
  SignInText: {
    position: 'absolute',
    marginLeft: 105,
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
});
