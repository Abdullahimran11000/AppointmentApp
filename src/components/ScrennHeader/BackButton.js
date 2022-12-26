import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackButtonStyle} from '../../assets/styles/ScreenHeaderStyle/BackButtonStyle';
import NeoButton from '../../components/NeoMorphButton/NeoButton';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColor';

const BackButton = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={BackButtonStyle.headerView}>
          <View style={BackButtonStyle.iconView}>
            <NeoButton
              width={wp('10')}
              height={wp('10')}
              borderRadius={wp('5')}
              backgroundColor={AppColor.whiteShade}
              marginTop={wp("-1")}>  
              <TouchableOpacity onPress={props.onPress}>
                <Ionicons name="chevron-back-sharp" size={25} color="black" />
              </TouchableOpacity>
            </NeoButton>
          </View>
          <View>
            <Text style={BackButtonStyle.headingText}>{props.children}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BackButton;
