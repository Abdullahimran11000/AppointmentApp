import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Swiper from 'rn-swipe-button';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const SwipeButton = props => {
  return (
    <SafeAreaView>
      <View style={{alignSelf: 'center'}}>
        <Swiper
          disabled={false}
          width={wp('85')}
          enableRightToLeftSwipe={true}
          onSwipeSuccess={() => props.navigation.navigate('LogIn')}
          title="swipe to start"
          titleStyles={{
            fontFamily: 'Poppins-Light',
            fontSize: 15,
            color: 'white',
          }}
          shouldResetAfterSuccess={true}
          railBackgroundColor="#e3bff5"
          railBorderColor="#e3bff5"
          railFillBackgroundColor="#b88acf"
          railFillBorderColor="#b88acf"
          thumbIconBackgroundColor="white"
          thumbIconBorderColor="white"></Swiper>
      </View>
    </SafeAreaView>
  );
};

export default SwipeButton;
