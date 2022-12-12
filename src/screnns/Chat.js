import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ChatStyle} from '../assets/styles/ChatStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BackButton from './BackButton';
import {AppColor} from '../assets/colors/AppColor';

const Chat = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{width: wp(100), height: hp(100), alignSelf: 'center'}}>
          <View style={ChatStyle.SearchBar}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={ChatStyle.backbutton}>
              <Ionicons name="chevron-back-sharp" size={20} />
            </TouchableOpacity>
          </View>
          <View style={ChatStyle.headerView}>
            <Image
              style={ChatStyle.image}
              source={require('../assets/images/profile.jpg')}
            />
            <Text style={ChatStyle.nameText}>Dr.Adam Jordan</Text>

            <Text style={ChatStyle.status}>Online</Text>
            <View style={ChatStyle.headerInnerViewIcons}>
              <TouchableOpacity>
              <Ionicons size={23} name="videocam" color={AppColor.primary} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Ionicons
                size={20}
                name="call"
                color={AppColor.primary}
                style={{left: wp(3)}}
              />
              </TouchableOpacity>
            </View>
          </View>
          <View style={ChatStyle.messageContainerView}>
            <View style={{alignSelf: 'center', top: hp(1)}}>
              <Text style={{fontFamily: 'Poppins-SemiBold'}}>Today</Text>
            </View>
            <View>
              <View style={ChatStyle.messageOneView}>
                <Text style={ChatStyle.textRight}>Hello Doc. Good Morning</Text>
              </View>
              <View>
                <Text style={ChatStyle.subHeadingTextOne}>09:30 am</Text>
                {/* <FontAwesome5
                  name="check-double"
                  color={'skyblue'}
                  style={{left: wp(71), top: hp(2.6)}}
                /> */}
              </View>
              <Image
                style={ChatStyle.messageImage1}
                source={require('../assets/images/profile.jpg')}
              />
            </View>
            <View style={{bottom: hp(3)}}>
              <View style={ChatStyle.messageTwoView}>
                <Text style={ChatStyle.textLeft}>
                  Morning. Can I help you ?
                </Text>
              </View>
              <View>
                <Text style={ChatStyle.subHeadingTextTwo}>09:31 am</Text>
              </View>
              <Image
                style={ChatStyle.messageImage2}
                source={require('../assets/images/selfie.jpg')}
              />
            </View>
            <View style={{bottom: hp(5)}}>
              <View style={ChatStyle.messageThreeView}>
                <Text style={ChatStyle.textRight2}>
                  I'd like a advice on problem i am having
                </Text>
              </View>
              <View style={ChatStyle.textRight2Paragraph}>
                <Text style={ChatStyle.textRight2ParagraphStyle}>
                  So for the past week i've pain in my lower back & its been
                  getting worse day by day, do i have symptomes of Inook?
                </Text>
              </View>
              <View>
                <Text style={ChatStyle.subHeadingTextThree}>09:33 am</Text>
                {/* <FontAwesome5
                  name="check-double"
                  color={'skyblue'}
                  style={{left: wp(71), top: hp(2.6)}}
                /> */}
              </View>
              <Image
                style={ChatStyle.messageImage3}
                source={require('../assets/images/profile.jpg')}
              />
            </View>
            <View style={{bottom: hp(8)}}>
              <View style={ChatStyle.messageFourView}>
                <Text style={ChatStyle.textLeft4}>Jordan is typing...</Text>
              </View>
              <Image
                style={ChatStyle.messageImage4}
                source={require('../assets/images/selfie.jpg')}
              />
            </View>
          </View>
          <View style={ChatStyle.sendMessageContainerView}>
            <TextInput
              textAlign="center"
              fontFamily={'Poppins-Regular'}
              placeholder="Write your Message"
            />
            <TouchableOpacity style={ChatStyle.sendMessageTouchableOpacityView}>
              <View style={ChatStyle.sendMessageIconView}>
                <Icon
                  name="location-arrow"
                  color={AppColor.white}
                  size={23}
                  style={ChatStyle.Icon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
