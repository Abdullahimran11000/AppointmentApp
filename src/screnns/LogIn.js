import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from './BackButton';

const LogIn = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View styles={styles.MainView}>
          <BackButton onPress={() => props.navigation.goBack()}>
            {'Log in'}
          </BackButton>

          <View style={{marginTop: 50}}>
            <View style={{margin: 5}}>
              <Text style={styles.TextStyle}>Email address </Text>

              <TextInput
                placeholder="enter your email"
                keyboardType="email-address"
                style={styles.TextFields}></TextInput>
            </View>

            <View style={{margin: 5}}>
              <Text style={styles.TextStyle}>Password</Text>

              <TextInput
                placeholder="enter your password"
                secureTextEntry
                style={styles.TextFields}></TextInput>

              <Icon
                name="eye-slash"
                size={15}
                style={{
                  position: 'absolute',
                  marginLeft: 310,

                  marginVertical: 45,
                }}></Icon>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View
            style={{
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={styles.Touchable}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  height: 35,
                  marginTop: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                Log In
              </Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'center'}}>or</Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                borderRadius: 23,
                paddingVertical: 10,
                paddingHorizontal: 75,
                flexDirection: 'row',
                backgroundColor: 'white',
              }}>
              <Image
                style={{height: 20, width: 20, marginLeft: 5}}
                source={require('../assets/images/google.webp')}></Image>
              <Text
                style={{
                  marginLeft: 10,
                  color: 'black',
                  textAlign: 'center',
                  fontFamily: 'Poppins-Light',
                }}>
                Login With Google
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{marginBottom: 3}}>Don't have an account? </Text>
            <TouchableOpacity />
            <Text style={{fontFamily: 'Poppins-SemiBold', color: 'black'}}>
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LogIn;

const styles = StyleSheet.create({
  MainView: {flex: 1},

  TextLogIn: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  TextFields: {
    margin: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },

  ForgotText: {
    textAlign: 'right',
    marginHorizontal: 25,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },

  GoogleText: {textAlign: 'center', marginTop: 10, marginBottom: 20},

  TextStyle: {
    marginLeft: 15,
    color: 'black',

    fontFamily: 'Poppins-Bold',
  },
  Touchable: {
    borderRadius: 23,
    margin: 5,
    width: 305,

    backgroundColor: '#c38cde',
  },
});
