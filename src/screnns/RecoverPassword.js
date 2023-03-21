import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Lottie from 'lottie-react-native';
import {RecoverPasswordStyle} from '../assets/styles/AuthStyle/RecoverPasswordStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import BackButton from '../components/ScrennHeader/BackButton';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import NeoTextInput from '../components/NeoMorphTextInput/NeoTextInput';
import CustomModal from '../components/Modal/CustomModal';
import CustomModal1 from '../components/Modal/CustomModal';
import {AppColor} from '../assets/colors/AppColor';

const RecoverPassword = ({navigation}) => {
  
  const [eye, setEye] = useState(false);
  // const navigation = useNavigation();
  const [showInstructionModal, setShowInstructionModal] = useState(false);
  const [showPasswordMessageInModal, setShowPasswordMessageInModal] =
    useState(false);
  const [newPasswordInputText, setNewPasswordInputText] = useState('abdullah@');
  const [passwordLabel, setPasswordLabel] = useState(AppColor.blackOpacity3);
  const [passwordLength, setPasswordLength] = useState(false);
  const [confirmPasswordInputText, setConfirmPasswordInputText] =
    useState('abdullah@');
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState(
    AppColor.blackOpacity3,
  );
  const [passwordMatching, setPasswordMatching] = useState(false);

  const passwordRef = useRef(null);
  const confirmRef = useRef(null);

  const saveHandler = () => {
    if (newPasswordInputText === '') 
    {
      setPasswordLabel(AppColor.red);
    } 
    else if (confirmPasswordInputText === '') 
    {
      setConfirmPasswordLabel(AppColor.red);
    } 
    else {
      if (
        (newPasswordInputText.includes('@') ||
          newPasswordInputText.includes('!') ||
          newPasswordInputText.includes('.')) &&
        (confirmPasswordInputText.includes('@') ||
          confirmPasswordInputText.includes('!') ||
          confirmPasswordInputText.includes('.'))
      ) {
        if (newPasswordInputText.length >= 8) {
          if (newPasswordInputText === confirmPasswordInputText) {
            setPasswordLength(false);
            setShowPasswordMessageInModal(true);
            setPasswordLabel(AppColor.blackOpacity3);
            setConfirmPasswordLabel(AppColor.blackOpacity3);
            setNewPasswordInputText('');
            setConfirmPasswordInputText('');
          } else {
            setPasswordMatching(true);
            setShowInstructionModal(true);
          }
        } else {
          setPasswordLength(true);
          setShowPasswordMessageInModal(true);
        }
      } else {
        setShowInstructionModal(true);
      }
    }
  };

  // For Asterik

  const ast = {
    asterik:<Text style={{color:'red'}}>{'*'}</Text>
  }


  useEffect(() => {
    navigation.addListener('focus', () => {
      console.log('Recover Password screen is focusing right now!');
    });
  }, []);
  return (
    <SafeAreaView style={RecoverPasswordStyle.mainView}>
      <View style={{flex:1}}>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}>
          {'Recovery Password'}
        </BackButton>
      </View>  
      <ScrollView style={{height:hp('90')}}>
        <View style={{flex:9}}>
        <Lottie
          style={RecoverPasswordStyle.animationStyle}
          source={require('../assets/animations/appIntroRecover.json')}
          loop autoPlay
        />
        <Text style={RecoverPasswordStyle.tagText}>Create new password </Text>
        <Text style={RecoverPasswordStyle.paraText}>
          Please enter your email address to recover your forgoton password
        </Text>
        <Text style={RecoverPasswordStyle.labelText1}>New Password {ast.asterik}</Text>
        <NeoTextInput
          value={newPasswordInputText}
          reference={passwordRef}
          autoFocus={true}
          placeholder={'Enter your password'}
          placeholderTextColor={passwordLabel}
          secureTextEntry={!eye}
          keyboardType={'ascii-capable'}
          onChangeText={text => setNewPasswordInputText(text)}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            confirmRef.current.focus();
          }}>
          <TouchableOpacity
            style={RecoverPasswordStyle.iconTouchableStyle}
            onPress={() => {
              if (eye === true) {
                setEye(false);
              } else {
                setEye(true);
              }
            }}>
            {!eye ? (
              <Entypo name="eye-with-line" size={wp('4.5')} color="black" />
            ) : (
              <Entypo name="eye" size={wp('4.5')} color="black" />
            )}
          </TouchableOpacity>
        </NeoTextInput>
        <Text style={RecoverPasswordStyle.labelText1}>Confirm Password {ast.asterik}</Text>
        <NeoTextInput
          value={confirmPasswordInputText}
          reference={confirmRef}
          placeholder={'Confirm your password'}
          placeholderTextColor={confirmPasswordLabel}
          keyboardType={'ascii-capable'}
          onChangeText={text => {
            setConfirmPasswordInputText(text);
          }}
          returnKeyType={'next'}
          onSubmitEditing={saveHandler}
        />
        <TouchableOpacity
          style={{alignSelf: 'center', marginVertical: wp('5')}}
          onPress={saveHandler}>
          <NeoButton
            darkShadowColor={AppColor.black}
            width={wp('55')}
            backgroundColor={AppColor.primary}
            height={hp('6')}
            borderRadius={wp('10')}
            marginBottom={wp('10')}>
            <Text style={RecoverPasswordStyle.touchableText}>Save</Text>
          </NeoButton>
        </TouchableOpacity>
        </View>

        {/* Modal */}

        <CustomModal
          isVisible={showPasswordMessageInModal}
          onBackdropPress={() => {
            setShowPasswordMessageInModal(false);
          }}
          modalButtonPress={() => {
            if (passwordLabel) {
              setShowPasswordMessageInModal(false);
              navigation.navigate('Congratulation');
            }
          }}
          buttonBackgroundColor={passwordLength ? '#E36A6A' : AppColor.primary}
          source={
            passwordLength
              ? require('../assets/animations/Alert.json')
              : require('../assets/animations/passwordLength.json')
          }
          text={
            passwordLength
              ? 'Your new password must be 8 character long.'
              : 'Your New Password has been set.'
          }
          buttonText={passwordLength ? 'Close' : 'Login'}
        />
        
        <CustomModal1
          isVisible={showInstructionModal}
          onBackdropPress={() => {
            setShowInstructionModal(false);
          }}
          modalButtonPress={() => {
            setShowInstructionModal(false);
            passwordRef.current.focus();
          }}
          buttonBackgroundColor={'#E36A6A'}
          source={require('../assets/animations/Alert.json')}
          text={
            passwordMatching
              ? 'Your confirm password is not match with your new password.'
              : 'Your password must have one of the following special character (@ , / , .)'
          }
          buttonText={'Close'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoverPassword;
