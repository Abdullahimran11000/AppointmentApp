import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {ChatStyle} from '../assets/styles/DashboardStyle/ChatStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppColor} from '../assets/colors/AppColor';
import {Neomorph} from 'react-native-neomorph-shadows';
import RightChatCard from '../components/Chats/RightChatCard';
import LeftChatCard from '../components/Chats/LeftChatCard';
import {ScrollView} from 'react-native-virtualized-view';
import {useNavigation} from '@react-navigation/native';
import AppContext from '../assets/context/AppContext';

const Chat = ({navigation}) => {
  // const navigation = useNavigation();
  const {storeOpenCam} = useContext(AppContext);
  const {storeCallStatus} = useContext(AppContext)
  const [allChats, setAllChats] = useState([
    {
      id: 1,
      message: 'Hello doc! i want to consult',
      time: '09:40 am',
      sender_id: 1,
      sender_type: 'customer',
    },
    {
      id: 2,
      message: 'Yes! How can i help you',
      time: '09:50 am',
      sender_id: 2,
      sender_type: 'serviceProvider',
    },
  ]);

  const loadAllChats = () => {
    RNFetchBlob.fetch('GET', 'https://jsonplaceholder.typicode.com/todos').then(
      resp => setAllChats(resp.json()),
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: AppColor.whiteShade,flex:14,alignSelf:'center'}}>
      <ScrollView>
        <Neomorph style={ChatStyle.firstMainView} >
            <View style={ChatStyle.mainViewInnerView}>
              <View style={ChatStyle.mainViewInnerViewOne}>
                <TouchableOpacity  onPress={() => navigation.navigate('Dashboard')} style={ChatStyle.backbutton}>
                  <Ionicons name="chevron-back-sharp" size={wp('6')} color={AppColor.primary} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={ChatStyle.mainViewInnerViewTwo}>
              <View style={ChatStyle.mainViewInnerViewTwoInnerView}>
                <Image style={ChatStyle.image} source={require('../assets/images/profile.jpg')} />
                  <View style={ChatStyle.mainViewInnerViewTwoInnerViewOne}>
                    <Text style={[ChatStyle.nameText,{color:'black'}]}>Dr.Adam Jordan</Text>
                    <Text style={[ChatStyle.status,{color:'black'}]}>Online</Text>
                  </View>
                <View style={ChatStyle.headerInnerViewIcons}>
                  <Neomorph darkShadowColor={AppColor.black} style={ChatStyle.videoCamButtonStyle}>
                    <TouchableOpacity onPress={() => { navigation.navigate('VideoCalling'); storeOpenCam(true); storeCallStatus('Video') }}>
                      <Ionicons size={wp('5.5')} name="videocam" color={AppColor.primary} />
                    </TouchableOpacity>
                  </Neomorph>
                  <Neomorph darkShadowColor={AppColor.black} style={ChatStyle.callButtonStyle}>
                    <TouchableOpacity onPress={() => { navigation.navigate('VideoCalling'); storeOpenCam(false); storeCallStatus('Audio') }}>
                      <Ionicons size={wp('5.5')} name="call" color={AppColor.primary} />
                    </TouchableOpacity>
                  </Neomorph>
                </View>
              </View>
            </View>
          </Neomorph>
          <Neomorph style={ChatStyle.secondMainView}>
          <View style={ChatStyle.messageContainerView}>
            <View style={ChatStyle.sendMessageContainerHeaderTextView}>
              <Text style={ChatStyle.sendMessageContainerHeaderTextStyle}>Today</Text>
              </View>
                  <ScrollView>
                    <FlatList
                      data={allChats}
                      renderItem={({item}) => {
                        if (item.sender_id == 1) {
                          return <RightChatCard item={item} />;
                        } else {
                          return <LeftChatCard item={item} />;
                        }
                      }}
                    />
                </ScrollView>
            </View>
          <View style={ChatStyle.sendMessageContainerView}>
            <Neomorph inner style={ChatStyle.sendMessageContainerStyle}>
              <TextInput style={ChatStyle.sendMessageContainerTextStyle}  placeholder="Write your Message"/>
            </Neomorph>
            <TouchableOpacity style={ChatStyle.sendMessageTouchableOpacityView}>
              <View style={ChatStyle.sendMessageIconView}>
                <Icon name="location-arrow" color={AppColor.white} size={wp('6')} style={ChatStyle.Icon}/>
              </View>
            </TouchableOpacity>
          </View>
        {/* </View> */}
        </Neomorph>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chat;
