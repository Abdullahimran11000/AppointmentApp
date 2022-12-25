import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {VideoCallingStyle} from '../assets/styles/VideoCallingStyle';

import BackButton from './ScrennHeader/BackButton';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NeoButton from '../components/NeoMorphButton/NeoButton';
import {AppColor} from '../assets/colors/AppColor';

import BackButton from '../components/ScrennHeader/BackButton';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const VideoCalling = props => {
  return (
    <SafeAreaView
      style={{backgroundColor: AppColor.whiteShade, height: hp('100')}}>
      <BackButton onPress={() => props.navigation.goBack()}></BackButton>

      <View style={VideoCallingStyle.nameTimeView}>
        <Text style={VideoCallingStyle.text}>Dr.Elisbeth</Text>
        <Text style={[VideoCallingStyle.text, {fontFamily: 'Poppins-Light'}]}>
          10:33pm
        </Text>
      </View>
      
      <View style={VideoCallingStyle.firstCircleView}>
      
        <View style={VideoCallingStyle.secondCircleView}>
          <View style={VideoCallingStyle.thirdCircleView}>
            <View style={VideoCallingStyle.imageView}>
              <Image
                style={VideoCallingStyle.imageStyle}
                source={require('../assets/images/doctorsInfo.png')}
              />
            </View>
          </View>
        </View>
        </View>
       

      <View style={VideoCallingStyle.footerView}>
        <View style={VideoCallingStyle.buttonView}>
          <NeoButton
            width={wp('17')}
            height={hp('9')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp('25')}>
            <TouchableOpacity>
              <Icon
                style={{color: AppColor.black}}
                name="microphone-slash"
                size={22}></Icon>
            </TouchableOpacity>
          </NeoButton>
        </View>

        <View style={[VideoCallingStyle.buttonView]}>
          <NeoButton
            width={wp('17')}
            height={hp('9')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp('25')}>
            <TouchableOpacity>
              <MaterialIcon
                style={{color: AppColor.red}}
                name="call-end"
                size={29}
              />
            </TouchableOpacity>
          </NeoButton>
        </View>

        <View style={VideoCallingStyle.buttonView}>
          <NeoButton
            width={wp('17')}
            height={hp('9')}
            backgroundColor={AppColor.whiteShade}
            borderRadius={wp('25')}>
            <TouchableOpacity>
              <Icon
                style={{color: AppColor.black}}
                name="video-camera"
                size={22}></Icon>
            </TouchableOpacity>
          </NeoButton>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VideoCalling;
