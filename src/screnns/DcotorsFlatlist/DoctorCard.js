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
import {DashboardStyle} from '../../assets/styles/DashboardStyle/DashboardStyle';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppColor} from '../../assets/colors/AppColor';

const DoctorCard = ({colors, source, name, dept, star, experience, backColor, onPress, marginRight}) => {
  const [fill, setFill] = useState('hearto');
  const [color, setColor] = useState('#FFFFFF');
  return (
    <SafeAreaView>
      <View style={{width: wp('37'), height: hp('40'), alignSelf: 'center', marginRight: marginRight}}>
        <View style={{width: wp('36'), height: hp('37'), marginTop: wp('4.5')}}>
          <View
            style={{
              width: wp('36'),
              height: wp('36'),
              borderRadius: wp('8'),
              marginTop: wp('3'),
              backgroundColor: colors,
            }}>
            <View>
              <View style={DashboardStyle.doctorCont}>
                <ImageBackground
                  style={DashboardStyle.doctorCardImage}
                  source={source}
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
                        <AntDesign name={fill} size={12} color={color} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
          <View style={DashboardStyle.doctorLowerContFirstHeading}>
            <Text style={DashboardStyle.doctorLowerContFirstHeadingText}>
              {name}
            </Text>
          </View>
          <View style={{display: 'flex', flex: 1, flexDirection: 'row', width: wp('30')}}>
            <Text style={DashboardStyle.doctorLowerContSecondHeadingText}>
              {dept}
            </Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, width: wp('6'), height: wp('6'), borderRadius: wp('6'), backgroundColor: backColor, justifyContent: 'center', alignItems: 'center'}} onPress={onPress}>
              <AntDesign name={"right"} size={wp('4')} color={AppColor.white} style={{marginLeft: wp('0.5')}}/>
            </TouchableOpacity>
          </View>

          <View style={DashboardStyle.doctorLowerFlexView}>
            <View style={DashboardStyle.doctorLowerFlexViewInnerView}>
              <TouchableOpacity>
                <AntDesign name="star" size={wp('4')} color="#FFD700"/>
              </TouchableOpacity>
              <Text style={DashboardStyle.doctorLowerFlexTextOne}>
                {star}
              </Text>
            </View>

            <View style={{position: 'absolute', right: 0}}>
              <View style={DashboardStyle.doctorLowerFlexViewInnerView}>
                <MaterialIcons
                  name="work"
                  size={wp('4')}
                  color={AppColor.black}></MaterialIcons>
                <Text style={DashboardStyle.doctorLowerFlexTextTwo}>
                  {experience}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorCard;
