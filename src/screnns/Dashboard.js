import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DashboardStyle} from '../assets/styles/DashboardStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Dashboard = props => {
  const [fill, setFill] = useState('hearto');
  const [color, setColor] = useState('#f56262');

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <LinearGradient
            colors={[
              'rgba(195, 140, 222, 0.4)',
              'rgba(195, 140, 222, 0.6)',
              'rgba(195, 140, 222,1)',
            ]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0.1, 0.3, 0.9]}
            style={DashboardStyle.dashCard}>
            <View style={DashboardStyle.leftContainer}>
              <View style={DashboardStyle.leftContainerInnerContainer}>
                <View style={DashboardStyle.leftContainerFirstHeading}>
                  <Text style={DashboardStyle.leftContainerFirstHeadingText}>
                    Healthy or expensive
                  </Text>
                </View>
                <View style={DashboardStyle.leftContainerSecondHeading}>
                  <Text style={DashboardStyle.leftContainerSecondHeadingText}>
                    Protect your family from virus before it's too late
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  style={DashboardStyle.dashContainerImage}
                  source={require('../assets/images/doctorsInfo.png')}
                  resizeMode="cover"></Image>
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={[
              'rgba(195, 140, 222, 0.8)',
              'rgba(195, 140, 222, 0.8)',
              'rgba(195, 140, 222, 0.8)',
            ]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0.1, 0.3, 0.9]}
            style={DashboardStyle.doctorCard}>
            <View>
              <View style={DashboardStyle.doctorContainer}>
                <ImageBackground
                  style={DashboardStyle.doctorCardImage}
                  source={require('../assets/images/doctorsInfo.png')}
                  resizeMode="cover">
                  <View style={DashboardStyle.doctorHeaderContainer}>
                    <View
                      style={
                        DashboardStyle.doctorHeaderContainerInnerContainer
                      }>
                      <TouchableOpacity
                        style={DashboardStyle.doctorHeaderContainerTouchable}
                        onPress={() => {
                          if (fill === 'heart') {
                            setFill('hearto');
                            setColor('#FFFFFF');
                          } else {
                            setFill('heart');
                            setColor('#f56262');
                          }
                        }}>
                        <AntDesign
                          name={fill}
                          size={15}
                          color={color}></AntDesign>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
