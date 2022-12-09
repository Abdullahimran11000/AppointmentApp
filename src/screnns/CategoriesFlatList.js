import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DoctorCategories from './DoctorCategories';
import {AppColor} from '../assets/colors/AppColor';

const CategoriesFlatList = props => {
  const data = [
    {
      id: 1,
      deptName: 'Radiology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.1)',
    },
    {
      id: 2,
      deptName: 'radiology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.2)',
    },
    {
      id: 3,
      deptName: 'Cardiology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.3)',
    },
    {
      id: 4,
      deptName: 'Dentist',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.4)',
    },
    {
      id: 5,
      deptName: 'Psychology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.5)',
    },
    {
      id: 6,
      deptName: 'Neradiology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.6)',
    },
    {
      id: 7,
      deptName: 'Gynacology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.7)',
    },
    {
      id: 8,
      deptName: 'Radiology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.8)',
    },
  ];

  const renderItem = ({item}) => (
    <DoctorCategories
      outerWidth={props.outerWidth}
      outerHeight={props.outerHeight}
      outerRadius={props.outerRadius}
      outerMargin={props.outerMargin}
      innerWidth={props.innerWidth}
      innerHeight={props.innerHeight}
      innerRadius={props.innerRadius}
      backgroundColor={true ? AppColor.white : AppColor.whiteOpacity}
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
      deptName={item.deptName}
      source={item.source}
      color={item.color}
      boxWidth={props.boxWidth}
      boxHeight={props.boxHeight}
      boxRadius={props.boxRadius}
      marginRight={props.marginRight}
      marginBottom={props.marginBottom}
      textWidth={props.textWidth}></DoctorCategories>
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={props.numColumns}
          horizontal={props.horizontal}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesFlatList;
