import React from 'react';
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
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.166351,
          longitude: 74.1959,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={{width: wp('100'), height: hp('100')}}>
        <View style={{flex: 2, alignSelf: 'center'}}>
          <View style={styles.SearchBar}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{
                width: wp('10'),
                height: wp('10'),
                borderRadius: wp('9'),
                backgroundColor: 'rgba(0,0,0,0.1)',
                marginLeft: wp('5'),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name="chevron-back-sharp" size={20} />
            </TouchableOpacity>
            <Icon style={{marginLeft: wp('5')}} name="search" size={15} />
            <TextInput
              style={{
                fontFamily: 'Poppins-Regular',
                width: wp('40'),
                marginLeft: wp('1'),
              }}
              placeholder="Search Address"></TextInput>
          </View>
        </View>

        <View style={{flex: 8}}></View>

        <View style={{flex: 4, alignItems: 'center'}}>
          <Card mode="contained" style={styles.footer}>
            <View style={{marginTop: 10, marginLeft: 10}}>
              <Card.Title title="Gujranwala" style={{marginLeft: 80}} />
              <Card.Cover
                source={require('../assets/images/gujranwala.jpg')}
                style={{
                  marginTop: 10,
                  position: 'absolute',
                  width: 80,
                  height: 90,
                  borderRadius: 20,
                }}
              />
              <Card.Content style={{alignItems: 'center', marginLeft: 40}}>
                <Paragraph style={{}}>
                  <AntDesign name="star" size={15} color="#FFD700" />
                  <Text style={{fontFamily: 'Poppins-SemiBold'}}>4.5</Text>
                  (1560 reviews)
                </Paragraph>
              </Card.Content>
              <TouchableOpacity
                style={{
                  marginLeft: 100,
                  backgroundColor: '#c28cde',
                  width: 40,
                  padding: 5,
                  borderRadius: 10,
                }}>
                <Text style={{color: 'black', fontSize: 12}}>500m</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Schedule')}
                style={{
                  position: 'absolute',
                  color: 'black',
                  width: 30,
                  alignItems: 'center',
                  marginTop: 75,
                  marginLeft: 150,
                  backgroundColor: '#c28cde',
                  padding: 4,
                  borderRadius: 10,
                }}>
                <Icon name="arrow-right" size={15} />
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  position: 'absolute',
                  color: 'black',
                  width: 30,
                  alignItems: 'center',
                  marginTop: 75,
                  marginLeft: 190,
                  backgroundColor: '#F4A0E5',
                  padding: 4,
                  borderRadius: 10,
                }}>
                <Icon name="arrow-left" size={15} />
              </TouchableOpacity> */}
              {/* <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{
                  width: 100,
                  backgroundColor: '#c28cde',
                  padding: 5,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => props.navigation.navigate('Schedule')}
                style={{
                  width: 150,
                  backgroundColor: '#c28cde',
                  padding: 5,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text style={{color: 'white'}}>Go to Schedule</Text>
              </TouchableOpacity> */}
            </View>
          </Card>
        </View>
      </View>
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
    width: 270,
    margin: 20,
    alignItems: 'center',
    borderRadius: 30,
    borderColor: 'red',
  },
  icon: {
    position: 'absolute',
    marginHorizontal: 65,
    marginVertical: 16,
  },
  footer: {
    width: 300,
    height: 120,
    borderRadius: 20,
  },
});
