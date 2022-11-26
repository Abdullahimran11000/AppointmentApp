import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DashboardStyle} from '../assets/styles/DashboardStyle';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DoctorCard = (props) => {
  const [fill, setFill] = useState('hearto');
  const [color, setColor] = useState('#FFFFFF');
  return (
    <SafeAreaView>
      <View style={{width: wp('36'), height: hp('50'), margin: 15}}>
        <View style={{width: wp("36"), height: wp('36'), borderRadius: wp('8'), marginTop: 10, backgroundColor: props.color}}>
          <View>
            <View style={DashboardStyle.doctorCont}>
              <ImageBackground
                style={DashboardStyle.doctorCardImage}
                source={props.source}
                resizeMode="cover">
                <View style={DashboardStyle.doctorHeaderCont}>
                  <View style={DashboardStyle.doctorHeaderContInnerCont}>
                    <TouchableOpacity
                      style={DashboardStyle.doctorHeaderContTouchable}
                      onPress={() => {
                        if (fill === 'heart') {
                          setFill('hearto');
                          setColor('#FFFFFF');
                        } else {
                          setFill('heart');
                          setColor('#f56262');
                        }
                      }}>
                      <AntDesign name={fill} size={15} color={color} />
                    </TouchableOpacity>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={DashboardStyle.doctorLowerContFirstHeading}>
          <Text style={DashboardStyle.doctorLowerContFirstHeadingText}>
            {props.name}
          </Text>
        </View>
        <View>
          <Text style={DashboardStyle.doctorLowerContSecondHeadingText}>
            {props.dept}
          </Text>
        </View>
        <View>
          <View style={DashboardStyle.doctorLowerFlexView}>
            <View style={DashboardStyle.doctorLowerFlexTouchableView}>
              <TouchableOpacity>
                <AntDesign name="star" size={15} color="#FFD700" />
              </TouchableOpacity>
            </View>
            <View style={DashboardStyle.doctorLowerFlexTextOneView}>
              <Text style={DashboardStyle.doctorLowerFlexTextOne}>{props.star}</Text>
            </View>
            <View style={DashboardStyle.doctorLowerFlexIconView}>
              <MaterialIcons
                name="work"
                size={15}
                color="rgba(0, 0, 0, 1)"></MaterialIcons>
            </View>
            <View style={DashboardStyle.doctorLowerFlexTextTwoView}>
              <Text style={DashboardStyle.doctorLowerFlexTextTwo}>{props.experience}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorCard;
