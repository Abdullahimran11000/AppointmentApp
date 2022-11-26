import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Dimensions} from 'react-native';
import {TextInput} from 'react-native';
import {Card, Paragraph, Title} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const Maps = () => {
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
        <View style={{flex:2}}>
          <View style={styles.SearchBar}>
            <TextInput
              style={{marginLeft: 80, fontFamily: 'Poppins-Regular'}}
              placeholder="Search Address"></TextInput>
            <Icon style={styles.icon} name="search" />
          </View>
        </View>
        
        <View style={{flex: 8}}></View>

        <View style={{flex:4,alignItems: 'center'}}>
          <Card mode="contained" style={styles.footer}>
            <View style={{alignSelf: 'center'}}>
              <Card.Title title="Gujrawala" />
              <Card.Content>
                <Paragraph>Gujranwala</Paragraph>
              </Card.Content>
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
    backgroundColor: 'white',
    width: 270,
    margin: 20,
    marginHorizontal: 45,
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
