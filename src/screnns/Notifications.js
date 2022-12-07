import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Notifications = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{width: wp('100'), height: hp('100'), alignSelf: 'center'}}>
          <View style={{flex: 1, alignSelf: 'center'}}>
            <View style={styles.SearchBar}>
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  width: wp('10'),
                  height: wp('10'),
                  borderRadius: wp('9'),
                  backgroundColor: 'rgba(0,0,0,0.07)',
                  marginLeft: wp('2'),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="chevron-back-sharp" size={20} />
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  width: wp('40'),
                  marginLeft: wp('20'),
                  fontSize: 14,
                }}>
                Notifications
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'rgba(245, 203, 235, 0.9)',
                width: wp(90),
                height: hp(35),
                alignSelf: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  margin: hp(1.5),
                  fontFamily: 'Poppins-SemiBold',
                  color: 'black',
                }}>
                Today
              </Text>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  marginLeft: wp(55),
                  marginTop: hp(1.5),
                }}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
                  mark all as read
                </Text>
              </TouchableOpacity>
              <View style={{marginLeft: wp(3),borderWidth: wp(1),width: wp(84),height: hp(5)}}>
                <TouchableOpacity>
                   <Text>hello</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(245, 203, 235, 0.9)',
              alignSelf: 'center',
              borderRadius: 20,
              width: wp(90),
            }}>
            <Text style={{fontFamily: 'Poppins-SemiBold', margin: hp(1.5)}}>
              Yesterday
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Notifications;

const styles = StyleSheet.create({
  SearchBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,242,0.5)',
    width: wp(90),
    height: hp(7),
    margin: hp(2.5),
    alignItems: 'center',
    borderRadius: 30,
  },
});
