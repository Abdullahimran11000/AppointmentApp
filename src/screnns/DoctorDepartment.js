import React from 'react';
import {SafeAreaView, View, ScrollView, FlatList} from 'react-native';
import BackButton from './BackButton';
import DoctorCategories from './DoctorCategories';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const DoctorDepartment = props => {
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
    {
      id: 9,
      deptName: 'Radiology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 0.9)',
    },
    {
      id: 10,
      deptName: 'Radiology',
      source: require('../assets/images/radiology.png'),
      color: 'rgba(195, 140, 222, 1)',
    },
  ];

  const renderItem = ({item}) => (
    <DoctorCategories
      text={item.deptName}
      source={item.source}
      color={item.color}
      boxWidth={wp('22')}
      boxHeight={wp('22')}
      boxRadius={wp('8')}
      marginRight={wp('12')}
      marginBottom={wp('6')}></DoctorCategories>
  );
  return (
    <SafeAreaView>
      <View>
        <BackButton onPress={()=>props.navigation.goBack()}>{'Categories'}</BackButton>
        <View style={{marginTop: 30, width: wp('90'), alignSelf: 'center'}}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorDepartment;
