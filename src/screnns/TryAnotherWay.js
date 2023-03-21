import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { AppColor } from '../assets/colors/AppColor';
import {Neomorph} from 'react-native-neomorph-shadows';
import Lottie from 'lottie-react-native';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import CustomModal from '../components/Modal/CustomModal';
import {useNavigation} from '@react-navigation/native';
import {TryAnotherWayStyle} from '../assets/styles/TryAnotherWayStyle';
import BackButton from '../components/ScrennHeader/BackButton';
const TryAnotherWay = () => {
  const navigation = useNavigation();
  const [showMessage, setShowMessage] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('03054912561');
  const [phoneNumberValidator, setPhoneNumberValidator] = useState(false);
  const [phoneNumberLabel, setPhoneNumberLabel] = useState();

  const submitHandler = () => {
      if (phoneNumber === '') 
      {
        setPhoneNumberLabel('Enter your number');
        setPhoneNumberValidator(true);
      } 
      else if(phoneNumber.length < 11 || phoneNumber.length > 11)
      {
          setPhoneNumberLabel('please enter 11 digit phone-number');
          setPhoneNumberValidator(true)
      }
      else
      {
        setPhoneNumberValidator(false);
        setShowMessage(true);
      }
  };

  const ast = {
    asterik:<Text style={{color:'red'}}>{'*'}</Text>
  }

  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade, flex: 10}}>
      <View style={{flex:1}}>
      <BackButton onPress={() => navigation.goBack()}>
            {'Try Another Way'}
          </BackButton>
      </View>
      <View style={{flex:9}}>
      <View style={TryAnotherWayStyle.viewOne}>
        <Neomorph inner style={TryAnotherWayStyle.neomorphOne}>
          <Neomorph style={TryAnotherWayStyle.neomorphThree}>
            <Neomorph inner style={TryAnotherWayStyle.neomorphFour}>
              <Lottie
                style={TryAnotherWayStyle.lottyStyle}
                source={require('../assets/animations/phone_number.json')}
                autoPlay
              />
            </Neomorph>
          </Neomorph>
        </Neomorph>
      </View>
      <View style={TryAnotherWayStyle.viewTwo}>
        <Text style={TryAnotherWayStyle.text}> Enter Your Phone Number {ast.asterik}</Text>
      </View>
      <View style={TryAnotherWayStyle.viewThree}>
        <Neomorph style={TryAnotherWayStyle.neomorphTwo}>
          <PhoneInput
            defaultCode="PK"
            autoFocus

            textInputStyle={TryAnotherWayStyle.textInputStyle}
            textContainerStyle={TryAnotherWayStyle.textContainerStyle}
            containerStyle={TryAnotherWayStyle.containerStyle}
            codeTextStyle={TryAnotherWayStyle.codeTextStyle}
            value={phoneNumber}
            onChangeText={text => {
              setPhoneNumber(text);
            }}
          />
        </Neomorph>
      </View>
      {phoneNumberValidator ? (
        <Text style={TryAnotherWayStyle.textOne}> {phoneNumberLabel} </Text>
      ) : null}
      <View style={TryAnotherWayStyle.viewFour}>
        <TouchableOpacity onPress={submitHandler}>
          <NeoButton width={wp(90)} height={hp(8)} backgroundColor={AppColor.primary} borderRadius={30}>
            <Text style={TryAnotherWayStyle.textTwo}> Send </Text>
          </NeoButton>
        </TouchableOpacity>
      </View>
      </View>
      <CustomModal
        isVisible={showMessage}
        onBackdropPress={() => {setShowMessage(false)}}
        modalButtonPress={() => {navigation.navigate('Verification');}}
        buttonBackgroundColor={AppColor.primary}
        source={require('../assets/animations/success.json')}
        lottieStyle={{width: wp('35'), height: wp('35')}}
        text={'We have sent a verification code to your Mobile Number'}
        style={{marginTop: wp(10)}}
        buttonText={'Verify'}
      />
    </SafeAreaView>
  );
};

export default TryAnotherWay;
