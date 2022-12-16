import React, {useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import DoctorCategories from './DoctorCategories';
import {AppColor} from '../../assets/colors/AppColor';

const CategoriesFlatList = ({outerWidth,
  outerHeight,
  outerRadius,
  outerMargin,
  innerWidth,
  innerHeight,
  innerRadius,
  alignItems,
  justifyContent,
  boxWidth,
  boxHeight,
  boxRadius,
  marginRight,
  marginBottom,
  textWidth,
  numColumns,
  horizontal}) => {
  const [allCategories,setAllCategories] = useState([
    {
      id: 1,
      deptName: 'Radiology',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.1)',
    },
    {
      id: 2,
      deptName: 'radiology',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.2)',
    },
    {
      id: 3,
      deptName: 'Cardiology',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.3)',
    },
    {
      id: 4,
      deptName: 'Dentist',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.4)',
    },
    {
      id: 5,
      deptName: 'Psychology',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.5)',
    },
    {
      id: 6,
      deptName: 'Neradiology',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.6)',
    },
    {
      id: 7,
      deptName: 'Gynacology',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.7)',
    },
    {
      id: 8,
      deptName: 'Radiology',
      source: require('../../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.8)',
    },
  ]);

  const renderItem = ({item}) => (
    <DoctorCategories
      outerWidth={outerWidth}
      outerHeight={outerHeight}
      outerRadius={outerRadius}
      outerMargin={outerMargin}
      innerWidth={innerWidth}
      innerHeight={innerHeight}
      innerRadius={innerRadius}
      backgroundColor={true ? AppColor.white : AppColor.whiteOpacity}
      alignItems={alignItems}
      justifyContent={justifyContent}
      item={item}
      boxWidth={boxWidth}
      boxHeight={boxHeight}
      boxRadius={boxRadius}
      marginRight={marginRight}
      marginBottom={marginBottom}
      textWidth={textWidth}></DoctorCategories>
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={allCategories}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={numColumns}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoriesFlatList;
