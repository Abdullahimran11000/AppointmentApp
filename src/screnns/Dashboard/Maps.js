import React  from 'react';
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
import {Card, Paragraph} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MapsStyle} from '../../assets/styles/MapsStyle';
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
          <View style={MapsStyle.firstView}>
            <View style={MapsStyle.SearchBar}>
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={MapsStyle.backbutton}>
                <Ionicons name="chevron-back-sharp" size={20} />
              </TouchableOpacity>
              <Icon
                style={{marginLeft: wp(9), marginBottom: hp(0.5)}}
                name="search"
                color={'grey'}
                size={16}
              />
              <TextInput
                style={MapsStyle.textinput}
                placeholder="Search Address"
                fontFamily={'Poppins-SemiBold'}></TextInput>
            </View>
          </View>
          <View style={MapsStyle.middleView}></View>
          <View style={MapsStyle.lastView}>
            <Card mode="contained" style={MapsStyle.footer}>
              <View style={MapsStyle.cardView}>
                <Card.Cover
                  source={require('../../assets/images/gujranwala.jpg')}
                  style={MapsStyle.cardcover}
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
                  <TouchableOpacity style={MapsStyle.cardInnerButtonStyle}>
                    <Text style={MapsStyle.cardInnerButtonTextStyle}>
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
                  style={MapsStyle.iconStyle}>
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
});
