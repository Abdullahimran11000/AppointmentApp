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
import TextInputCustom from '../../components/CustomTextInput/TextInputCustom';
import {style} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const MyProfile = props => {
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
          <BackButton onPress={() => props.navigation.goBack()}>
            My Profile
          </BackButton>
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

          <View style={styles.inputViews}>
            <Text style={styles.nameText}>Full Name</Text>

            <TextInputCustom
              placeholder={'Enter your name'}
              keyboardType={'default'}
            />
          </View>
          <View style={styles.inputViews}>
            <Text style={styles.nameText}>Date of Birth</Text>

            <TextInputCustom
              placeholder={'Enter your birth'}
              keyboardType={'numeric'}
            />
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

          <View style={styles.inputViews}>
            <Text style={styles.nameText}>Email</Text>

            <TextInputCustom
              keyboardType={'email-address'}
              placeholder={'Enter your email'}
            />
          </View>

          <View style={styles.inputViews}>
            <Text style={styles.nameText}>Mobile Number</Text>

            <TextInputCustom
              styles={{marginBottom: wp('3')}}
              keyboardType={'number-pad'}
              placeholder={'enter your number'}
            />
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

  inputViews: {
    width: wp('90'),
    alignSelf: 'center'
  },
});
