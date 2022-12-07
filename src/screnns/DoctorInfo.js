import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DoctorInfoStyle} from '../assets/styles/DoctorInfoStyle';
import {StyleSheet} from 'react-native';
import DoctorHeader from './DoctorHeader';
import Fontisto from "react-native-vector-icons/Fontisto"
import AntDesign from 'react-native-vector-icons/AntDesign'
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const DoctorInfo = (props) => {
  const navigation = useNavigation()
  const {item} = props.route.params;
  const mapStyle= [
    {
      "featureType": "administrative.country",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "weight": 1
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#cb95e6"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#c28cde"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#cda6e0"
        }
      ]
    },
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: item.color}}>
          <View style={{display: 'flex', flex: 10}}>
            <ImageBackground
              style={{flex: 3.5, width: wp('90'), height: wp('90'), alignSelf: 'center'}}
              source={item.source}
              resizeMode="cover">
              <DoctorHeader onPress={()=> navigation.goBack()}/>
            </ImageBackground>
            
            <View style={{marginTop: wp('-4'), flex:5, backgroundColor: "white", borderTopLeftRadius: wp('15'), borderTopRightRadius: wp('15')}}>
              <View style={{width: wp('90'), alignSelf: 'center', marginTop: wp('10')}}>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: wp('5'), color: 'rgba(0, 0, 0, 1)'}}>{item.name}</Text>
                <Text style={{fontFamily: 'Poppins-Light', fontSize: wp('4'), color: 'rgba(0, 0, 0, 0.7)'}}>{item.dept} Speciallist</Text>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: wp('2')}}>
                  <Fontisto name={"map-marker-alt"} size={wp('5')} color={item.color} />
                  <Text style={{marginLeft: 5, fontFamily: 'Poppins-Light', fontSize: wp('4'), color: item.color}}>750-B Satellite Town</Text>
                </View>
              </View>

              <View style={{display: 'flex', width: wp('90'), alignSelf: 'center',  flexDirection: 'row', marginTop: wp('3')}}>
                <View style={{alignItems: 'center', justifyContent: 'center', width: wp('27'), height: wp('20'), borderRadius: wp('8'), marginRight: wp('4.5')}}>
                  <Text style={{fontFamily: 'Poppins-Light', fontSize: wp('3.7'), color: 'rgba(0, 0, 0, 1)'}}>Patients</Text>
                  <Text style={{fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: item.color}}>550+</Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', width: wp('27'), height: wp('20'), borderRadius: wp('8'), marginRight: wp('4.5')}}>
                  <Text style={{fontFamily: 'Poppins-Light', fontSize: wp('3.7'), color: 'rgba(0, 0, 0, 1)'}}>Experience</Text>
                  <Text style={{fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: item.color}}>{item.experience}+</Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', width: wp('27'), height: wp('20'), borderRadius: wp('8'), marginRight: wp('4.5')}}>
                  <Text style={{fontFamily: 'Poppins-Light', fontSize: wp('3.7'), color: 'rgba(0, 0, 0, 1)'}}>Rate</Text>
                  <View style={{display: 'flex', flexDirection: 'row'}}>
                    <AntDesign name="star" size={wp('4')} color="#FFD700"/>
                    <Text style={{fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: item.color, marginLeft: wp('1')}}>{item.star}</Text>
                  </View>
                </View>

              </View>

              <View style={{width: wp('90'), alignSelf: 'center', marginTop: wp('3')}}>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: 'rgba(0, 0, 0, 1)'}}>Biography</Text>
                <Text style={{textAlignVertical: 'center', fontFamily: 'Poppins-Light', fontSize: wp('3.5'), color: 'rgba(0, 0, 0, 0.6)'}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
              </View>

              <View style={{width: wp('90'), alignSelf: 'center', marginTop: wp('3')}}>
                <Text style={{fontFamily: 'Poppins-Bold', fontSize: wp('4.5'), color: 'rgba(0, 0, 0, 1)'}}>Location</Text>
              </View>

              <View style={{width: wp('90'), height: hp('30') , alignSelf: 'center', marginTop: wp('3'), borderRadius: wp('7'), overflow: 'hidden', marginBottom: wp('7')}}>
                <MapView style={styles.map} customMapStyle={mapStyle} initialRegion={{latitude: 32.163611, longitude: 74.190833, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}></MapView>
              </View>

              <View style={{alignSelf: 'center', marginBottom: wp('10')}}>
                <TouchableOpacity style={{width: wp('90'), height: hp('8'), backgroundColor: item.color, borderRadius: wp('15'), alignItems: 'center', justifyContent: 'center'}} onPress={()=>navigation.navigate('Maps')}>
                  <Text style={{fontFamily: "Poppins-Bold", fontSize: wp('4.3'), color: 'white'}}>Make an Appointment</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorInfo;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    
  },
 });
