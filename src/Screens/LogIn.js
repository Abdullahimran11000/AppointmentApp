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

const LogIn = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View styles={styles.MainView}>
          <View>
            <Text style={styles.TextLogIn}>LogIn</Text>
          </View>

          <View style={{marginTop: 50}}>
            <View style={{margin: 15}}>
              <Text style={styles.TextStyle}>Email</Text>

              <TextInput
                placeholder="enter your email"
                keyboardType="email-address"
                style={styles.TextFields}></TextInput>
            </View>

            <View style={{margin: 15}}>
              <Text style={styles.TextStyle}>password</Text>

              <TextInput
                placeholder="enter your password"
                secureTextEntry
                style={styles.TextFields}></TextInput>

              <Icon
                name="eye-slash"
                style={{
                  position: 'absolute',
                  marginLeft: 280,
                  margin: 20,
                  marginVertical: 57,
                }}></Icon>
            </View>
          </View>
          <TouchableOpacity onPress={()=>props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.ForgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          <View style={{padding: 15}}>
            <TouchableOpacity style={styles.Touchable}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  height: 35,

                  marginTop: 10,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>

            <Text style={{textAlign: 'center'}}>or</Text>
          </View>

          <TouchableOpacity
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              borderRadius: 25,
              margin: 10,
              paddingVertical: 20,
              paddingHorizontal: 30,
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <Image
              style={{height: 20, width: 20, marginLeft: 5}}
              source={require('../assets/Images/google.webp')}></Image>
            <Text style={{marginLeft: 10, color: 'black', textAlign: 'center'}}>
              Login With Google
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text>you already have an account </Text>
            <TouchableOpacity>
              <Text style={{color: 'black'}}>SignIn </Text>
            </TouchableOpacity>
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
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 20,
  },
  TextFields: {
    margin: 20,
    marginLeft: 20,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
  },

  ForgotText: {
    textAlign: 'right',
    marginRight: 15,
  },
  GoogleOpacity: {
    backgroundColor: 'white',

    borderRadius: 23,
    margin: 20,
    height: 50,
    width: 200,
  },
  GoogleText: {textAlign: 'center', marginTop: 10, marginBottom: 20},

  TextStyle: {
    marginLeft: 15,
    color: 'black',
    fontWeight: '900',
  },
  Touchable: {borderRadius: 23, margin: 20, backgroundColor: '#c38cde'},
});
