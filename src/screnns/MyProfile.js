import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RadioButtonRN from 'radio-buttons-react-native';
import BackButton from '../components/ScrennHeader/BackButton';
import {AppColor} from '../assets/colors/AppColor';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import {useNavigation} from '@react-navigation/native';

const MyProfile = () => {
  const navigation = useNavigation();
  const data = [
    {
      label: 'Male',
    },
    {
      label: 'Female',
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView style={styles.mainView}>
        <View>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>
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
              source={require('../assets/images/profile.jpg')}>
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

            <NeoTextInput
              width={wp('90')}
              marginBottom={hp('3')}
              placeholder={'Enter your name'}
              keyboardType={'default'}
            />
          </View>
          <View style={styles.inputViews}>
            <Text style={styles.nameText}>Date of Birth</Text>

            <NeoTextInput
              width={wp('90')}
              marginBottom={hp('1')}
              placeholder={'Enter your birth'}
              keyboardType={'numeric'}
            />
          </View>

          <View style={{marginLeft: 30, marginTop: 15}}>
            <Text style={styles.textGendr}>Gendre</Text>
          </View>
          <View
            style={{
              width: wp('83'),
              alignSelf: 'center',
              marginBottom: hp('2'),
            }}>
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

            <NeoTextInput
              marginBottom={wp('3')}
              width={wp('90')}
              keyboardType={'email-address'}
              placeholder={'Enter your email'}
            />
          </View>

          <View style={styles.inputViews}>
            <Text style={styles.nameText}>Mobile Number</Text>

            <NeoTextInput
              width={wp('90')}
              marginBottom={wp('3')}
              styles={{marginBottom: wp('3')}}
              keyboardType={'number-pad'}
              placeholder={'Enter your number'}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
    alignSelf: 'center',
  },

  mainView: {
    backgroundColor: AppColor.whiteShade,
    height: hp('100'),
  },
});
