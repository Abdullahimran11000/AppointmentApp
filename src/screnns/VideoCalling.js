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
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {VideoCallingStyle} from '../assets/styles/VideoCallingStyle';
import BackButton from './BackButton';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const VideoCalling = props => {
  return (
    <SafeAreaView>
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
          <TouchableOpacity>
            <Icon
              style={{color: 'white'}}
              name="microphone-slash"
              size={20}></Icon>
          </TouchableOpacity>
        </View>

        <View style={[VideoCallingStyle.buttonView,{backgroundColor:"red"}]}>
          <TouchableOpacity>
            <MaterialIcon
              style={{color: 'white'}}
              name="call-end"
              size={20}/>
          </TouchableOpacity>
        </View>

        <View style={VideoCallingStyle.buttonView}>
          <TouchableOpacity>
            <Icon style={{color: 'white'}} name="video-camera" size={20}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VideoCalling;
