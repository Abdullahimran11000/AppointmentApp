import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const Drawer = props => {
  const [showMenu, setShowMenu] = useState(false);
  const moveRight = useRef(new Animated.Value(1)).current;
  const scaling = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#c28cde'}}>
      <View style={{flex: 1, backgroundColor: '#c28cde'}}>
        <TouchableOpacity
          style={{
            width: wp('16'),
            height: wp('16'),
            borderRadius: wp('8'),
            backgroundColor: 'black',
            marginLeft: wp('3'),
            marginTop: wp('20'),
          }}>
          <Image
            style={{width: wp('16'), height: wp('16'), borderRadius: wp('8')}}
            source={require('../assets/images/profile.jpg')}></Image>
        </TouchableOpacity>
        <Text style={{marginLeft: wp('3'), marginTop: wp('2'), fontFamily: "Poppins-Bold", fontSize: 16,}}>Dara Khawar</Text>
      </View>

      <Animated.View
        style={{
          flex: 1,
          backgroundColor: 'rgba(255,255,255,0.3)',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          transform: [{scale: 0.68}, {translateX: 205}],
          borderRadius: showMenu ? wp('20') : 0,
        }}></Animated.View>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#ffffff',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          transform: [{scale: scaling}, {translateX: moveRight}],
          borderRadius: showMenu ? wp('20') : 0,
        }}>
        <View style={{flexDirection: 'row', margin: 10}}>
          <TouchableOpacity
            style={{
              width: wp('8'),
              height: wp('8'),
              borderRadius: wp('4'),
              backgroundColor: 'black',
            }}
            onPress={() => {
              Animated.timing(scaling, {
                toValue: showMenu ? 1 : 0.8,
                duration: 200,
                useNativeDriver: true,
              }).start();
              Animated.timing(moveRight, {
                toValue: showMenu ? 0 : 220,
                duration: 200,
                useNativeDriver: true,
              }).start();
              setShowMenu(!showMenu);
            }}></TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default Drawer;
