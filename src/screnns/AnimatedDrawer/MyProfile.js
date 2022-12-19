import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioButtonRN from 'radio-buttons-react-native';
import BackButton from '../ScrennHeader/BackButton';

const MyProfile = (props) => {
  const data = [
    {
      label: 'Male',
    },
    {
      label: 'Female',
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <BackButton onPress={()=>props.navigation.goBack()}>My Profile</BackButton>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              margin: 20,
            }}>
            <ImageBackground
              imageStyle={{borderRadius: 50}}
              style={styles.image}
              resizeMode="cover"
              source={require('../../assets/images/profile.jpg')}>
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 60,
                  marginVertical: 60,
                }}>
                <Icon size={15} name="camera"></Icon>
              </TouchableOpacity>
            </ImageBackground>
          </View>

          <View style={{marginLeft: 30}}>
            <Text style={styles.nameText}>Full Name</Text>
          </View>
          <View style={{marginLeft: 30, marginTop: 5}}>
            <TextInput
              style={styles.textFields}
              placeholder="enter your name"></TextInput>
          </View>
          <View style={{marginLeft: 30, marginTop: 10}}>
            <Text style={styles.nameText}>Date of Birth</Text>
          </View>
          <View style={{marginLeft: 30, marginTop: 5}}>
            <TextInput
              style={styles.textFields}
              placeholder="enter your birth"></TextInput>
          </View>

          <View style={{marginLeft: 30, marginTop: 15}}>
            <Text style={styles.textGendr}>Gendre</Text>
          </View>
          <View style={{width: wp('83'), alignSelf: 'center'}}>
            <RadioButtonRN
              deactiveColor="rgba(0,0,0,0.6)"
              boxActiveBgColor="white"
              activeColor="#c38cde"
              boxStyle={{
                borderRadius: 15,
                width: wp('35'),
                height: hp('8'),
                borderColor: 'white',
              }}
              circleSize={12}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
              textStyle={{marginLeft: 20, fontFamily: 'Poppins-Medium'}}
              data={data}
            />
          </View>

          <View style={{marginLeft: 30, marginTop: 15}}>
            <Text style={styles.nameText}>Email</Text>
          </View>

          <View style={{marginLeft: 30}}>
            <TextInput
              style={styles.textFields}
              keyboardType="email-address"
              placeholder="enter your email"></TextInput>
          </View>

          <View style={{marginLeft: 30, marginTop: 20}}>
            <Text style={styles.nameText}>Mobile Number</Text>
          </View>
          <View style={{marginLeft: 30, marginBottom: 30}}>
            <TextInput
              style={styles.textFields}
              keyboardType="number-pad"
              placeholder="enter your number"></TextInput>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyProfile;

const styles = StyleSheet.create({
  profileText: {fontFamily: 'Poppins-Bold', color: 'black'},

  image: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  camera: {
    position: 'absolute',
    marginLeft: 20,
    marginVertical: -20,
  },

  nameText: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  textFields: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 30,
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  textGendr: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
});
