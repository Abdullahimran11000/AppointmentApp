import React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {ScheduleStyle} from '../../assets/styles/DashboardStyle/ScheduleStyle';
import NeoButton from '../NeoMorphButton/NeoButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppColor} from '../../assets/colors/AppColor';

const TimingFlatList = ({item,numColumns}) => {
  return (
    <SafeAreaView>
        <TouchableOpacity>
          <NeoButton
            width={wp('42')}
            height={hp('8')}
            marginLeft={wp(5.5)}
            backgroundColor={AppColor.whiteDark}
            numColumns={numColumns}
            borderRadius={20}
            marginTop={wp(3)}>
            <View style={{display:'flex',flexDirection:'row',height:hp(8),borderRadius:20,alignItems:'center',justifyContent:'center'}}>  
              <Text style={[ScheduleStyle.buttonsTextRow1,{width:wp(14.5),height:hp(8),backgroundColor:AppColor.primary,textAlign:'center',textAlignVertical:'center'}]}>
                {item.start_time}
              </Text>
              <Text style={[ScheduleStyle.buttonsTextRow1,{width:wp(12),textAlign:'center',textAlignVertical:'center',color:'black'}]}>
                to
              </Text>
              <Text style={ScheduleStyle.buttonsTextRow3}>
                {item.end_time}
              </Text>
            </View>
          </NeoButton>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TimingFlatList;
