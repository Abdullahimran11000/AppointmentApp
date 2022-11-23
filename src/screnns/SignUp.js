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
  TouchableOpacity,
} from 'react-native';
import BackButton from './BackButton';

const SignUp = props => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          <BackButton onPress={()=> props.navigation.goBack()}>{'Sign Up'}</BackButton>
          <View style={{marginLeft: 30, marginTop: 30}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
              Fullname
            </Text>
            <TextInput
              style={{width: 300, marginTop: 10, borderRadius: 5}}
              keyboardType="default"
              placeholder="Enter Your Name"
              backgroundColor="white"></TextInput>
          </View>
          <View style={{marginTop: 20, marginLeft: 30}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
              Email
            </Text>
            <TextInput
              style={{width: 300, marginTop: 10, borderRadius: 5}}
              keyboardType="email-address"
              selectionColor={'#c28cde'}
              placeholder="Enter your Email"
              backgroundColor="white"></TextInput>
          </View>
          <View style={{marginTop: 20, marginLeft: 30}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Password</Text>
            <TextInput
              style={{width: 300, marginTop: 10, borderRadius: 5}}
              keyboardType="default"
              // maxLength={10}
              secureTextEntry={true}
              placeholder="Enter your Password"
              backgroundColor="white"></TextInput>
            <Icon
              style={{
                position: 'absolute',
                marginVertical: 46,
                marginLeft: 270,
              }}
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
              }}>
              I agree with
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: 110,
                marginTop: 8,
                fontWeight: 'bold',
                color: 'black',
              }}>
              terms
            </Text>
            <Text style={{position: 'absolute', marginLeft: 150, marginTop: 8}}>
              and
            </Text>
            <Text
              style={{
                position: 'absolute',
                marginLeft: 177,
                marginTop: 8,
                fontWeight: 'bold',
                color: 'black',
              }}>
              privacy
            </Text>
          </View>
          <View
            style={{
              width: 230,
              alignSelf: 'center',
              marginTop: 30,
              marginRight: 70,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#c28cde',
                width: 300,
                padding: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{marginTop: 10, textAlign: 'center', marginLeft: 70}}>
              Or
            </Text>
          </View>
          <View style={{marginLeft: 30, marginTop: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 20,
                width: 300,
              }}>
              <Image
                style={{width: 20, height: 20, marginLeft: 77}}
                source={require('../assets/images/google.jpg')}
              />
              <Text
                style={{position: 'absolute', marginLeft: 115, marginTop: 10}}>
                Sign in With this
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center', marginTop: 10, marginRight: 50}}>
            <Text>Already have an Account?</Text>
            <TouchableOpacity
              style={{position: 'absolute', marginLeft: 165}}
              onPress={() => props.navigation.goBack()}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
