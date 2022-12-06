import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MapView from 'react-native-maps';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {TextInput} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Maps = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 32.166351,
            longitude: 74.1959,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <View
          style={{width: wp('100'), height: hp('100'), alignSelf: 'center'}}>
          <View style={{flex: 2, alignSelf: 'center'}}>
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
              <Icon
                style={{marginLeft: wp(9), marginBottom: hp(0.5)}}
                name="search"
                color={'grey'}
                size={16}
              />
              <TextInput
                style={{
                  fontFamily: 'Poppins-Regular',
                  width: wp('40'),
                  marginLeft: wp('1'),
                  fontSize: 14,
                  
                }}
                placeholder="Search Address"
                fontFamily={'Poppins-SemiBold'}></TextInput>
            </View>
          </View>

          <View
            style={{
              flex: 8,
              width: wp(100),
              height: hp(100),
              alignSelf: 'center',
            }}></View>

          <View
            style={{
              flex: 4,
              alignItems: 'center',
              width: wp(100),
              height: hp(100),
            }}>
            <Card mode="contained" style={styles.footer}>
              <View style={{marginTop: hp(1), marginLeft: wp(3)}}>
                <Card.Cover
                  source={require('../assets/images/gujranwala.jpg')}
                  style={{
                    marginTop: hp(0.3),
                    // position: 'absolute',
                    width: wp(28),
                    height: hp(17.3),
                    borderRadius: 15,
                  }}
                />
                <Card.Title
                  style={{marginLeft: wp(27), position: 'absolute'}}
                  title="Dr. Rana Hamad"
                  titleStyle={{
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 15,
                  }}
                />
                <Card.Content
                  style={{
                    // alignItems: 'center',
                    marginLeft: wp(1),
                    position: 'absolute',
                  }}>
                  <Paragraph style={{marginTop: hp(6), marginLeft: wp(26)}}>
                    <AntDesign name="star" size={15} color="#FFD700" />
                    <Text style={{fontFamily: 'Poppins-SemiBold'}}>4.5</Text>
                    <Text
                      style={{
                        fontSize: 11,
                        fontFamily: 'Poppins-Regular',
                        color: 'rgba(0,0,0,0.3)',
                      }}>
                      &nbsp;(1560 reviews) {'\n'} Hospital
                    </Text>
                  </Paragraph>
                  <TouchableOpacity
                    style={{
                      marginTop: hp(13),
                      position: 'absolute',
                      marginLeft: wp(30),
                      backgroundColor: '#F6ECF4',
                      padding: 6,
                      borderRadius: 10,
                      width: wp(20),
                    }}>
                    <Text
                      style={{
                        color: '#EEEEEE ',
                        fontSize: 11,
                        fontFamily: 'Poppins-SemiBold',
                        marginLeft: hp(3),
                      }}>
                      500m
                    </Text>
                    <Icon
                      name="location-arrow"
                      size={10}
                      style={{
                        position: 'absolute',
                        marginLeft: wp(3),
                        marginTop: hp(1.3),
                      }}
                    />
                  </TouchableOpacity>
                </Card.Content>

                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Schedule')}
                  style={{
                    position: 'absolute',
                    width: wp(10),
                    marginTop: hp(13),
                    marginLeft: wp(54),
                    backgroundColor: '#c28cde',
                    padding: 9.2,
                    borderRadius: 10,
                  }}>
                  <Icon
                    name="chevron-right"
                    size={12}
                    color={'white'}
                    style={{alignSelf: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Maps;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    height: Dimensions.get('window').height,
  },
  SearchBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp(80),
    height: hp(7),
    margin: hp(2.5),
    alignItems: 'center',
    borderRadius: 30,
  },
  footer: {
    width: wp(80),
    height: hp(20),
    borderRadius: 20,
  },
});
