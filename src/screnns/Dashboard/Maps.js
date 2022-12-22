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
import {Card, Paragraph} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MapsStyle} from '../../assets/styles/DashboardStyle/MapsStyle';
import {Neomorph} from 'react-native-neomorph-shadows';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColor';

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
        <View style={MapsStyle.mainView}>
          <View style={MapsStyle.firstView}>
            {/* <Neomorph style={{width: wp("85"), height: hp("9"),backgroundColor:AppColor.whiteShade,justifyContent:'center',alignItems:'center', shadowRadius:4, borderRadius: wp('10'), marginTop:wp('4')}}> */}
              <Neomorph style={MapsStyle.innerFirstView}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={MapsStyle.backbutton}>
                  <Ionicons name="chevron-back-sharp" size={20} />
                    </TouchableOpacity>
                      <Icon style={MapsStyle.iconStyle} name="search" color={'grey'} size={16}/>
                        <TextInput style={MapsStyle.textinput} placeholder="Search Address" fontFamily={'Poppins-SemiBold'}></TextInput>
              </Neomorph>
             {/* </Neomorph> */}
           </View>
        <View style={MapsStyle.middleView}></View>
          <View style={MapsStyle.lastView}>
            {/* <Neomorph style={{width: wp(85),height: hp(23),borderRadius: 20,backgroundColor:AppColor.whiteShade,justifyContent:'center',alignItems:'center',shadowRadius:4}}> */}
            <Neomorph inner style={{width: wp(84),height: hp(23),borderRadius: 20,backgroundColor:AppColor.whiteShade,justifyContent:'center',alignItems:'center',shadowRadius:20}}>
            <Card mode="contained" style={MapsStyle.cardMainView}>
              <View style={MapsStyle.cardView}>
                <Card.Cover source={require('../../assets/images/gujranwala.jpg')} style={MapsStyle.cardcover}/>
                  <Card.Title style={MapsStyle.cardTitleStyle} title="Dr. Rana Hamad"
                    titleStyle={{fontFamily: 'Poppins-SemiBold', fontSize: 15}}/>
                      <Card.Content style={MapsStyle.cardContent}>
                        <Paragraph style={MapsStyle.cardParagraph}>
                          <AntDesign name="star" size={15} color="#FFD700" />
                            <Text style={{fontFamily: 'Poppins-SemiBold'}}>4.5</Text>
                              <Text style={{fontSize: 11,fontFamily: 'Poppins-Regular',color: 'rgba(0,0,0,0.3)'}}>&nbsp;(1560 reviews) {'\n'} Hospital</Text>
                        </Paragraph>
                          <Neomorph style={MapsStyle.innerLastViewFirstButton}>
                            <TouchableOpacity>
                              <Text style={MapsStyle.cardInnerButtonTextStyle}>500m</Text>
                                <Icon name="location-arrow" color={AppColor.primary} size={10}
                                  style={{ position: 'absolute', marginLeft: wp(1), marginTop: hp(0.5)}}/>
                            </TouchableOpacity>
                          </Neomorph>
                      </Card.Content>
                          <Neomorph style={MapsStyle.innerLastViewSecondButton}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Schedule')}>
                                <Icon name="chevron-right" size={12} color={'white'} style={{alignSelf: 'center'}}/>
                            </TouchableOpacity>
                          </Neomorph>
              </View>
            </Card>
            </Neomorph>
            {/* </Neomorph> */}
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
