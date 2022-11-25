import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, SafeAreaView} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {TextInput} from 'react-native';
const Maps = () => {
  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            width: 270,
            margin: 20,
            marginHorizontal: 45,
            borderRadius: 30,
          }}>
          {/* <BackButton /> */}
          <TextInput
            style={{marginLeft: 80, fontFamily: 'Poppins-Regular'}}
            placeholder="Search Address"></TextInput>
          <Icon
            style={{
              position: 'absolute',
              marginHorizontal: 65,
              marginVertical: 16,
            }}
            name="search"
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: 270,
            marginHorizontal: 45,
            borderRadius: 30,
          }}>
          <Text>hello</Text>
        </View>
        <View>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Maps;
