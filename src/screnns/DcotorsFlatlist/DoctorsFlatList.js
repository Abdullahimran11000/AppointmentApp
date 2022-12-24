import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView,FlatList} from 'react-native';
import DoctorCard from './DoctorCard';
const DoctorsFlatList = ({horizontal, numColumns, marginRight}) => {
  
  const navigation = useNavigation()  
  const data= [
    {name: 'Dr. Amanda', dept: 'Dentist', star: "4.5", experience: '5 years', color: 'rgba(195, 140, 222, 0.5)', source: require('../../assets/images/doctorsInfo.png')},
    {name: 'Dr. Omer', dept: 'Urology', star: "4.0", experience: '7 years', color: 'rgba(247, 106, 106, 0.4)', source: require('../../assets/images/drOmer.png')},
    {name: 'Dr. Asnan', dept: 'Dentist', star: "3.5", experience: '10 years', color: 'rgba(195, 140, 222, 1)', source: require('../../assets/images/doctorsInfo.png')},
    {name: 'Dr. Gough', dept: 'Dentist', star: "2.5", experience: '15 years', color: 'rgba(195, 140, 222, 0.1)', source: require('../../assets/images/doctorsInfo.png')},
    {name: 'Dr. Abdullah', dept: 'Urology', star: "4.5", experience: '2 years', color: 'rgba(247, 106, 106, 0.4)', source: require('../../assets/images/doctorsInfo.png')},
  ]

  const renderItem = ({item}) =>{
    return (
      <DoctorCard colors={item.color} source={item.source} name={item.name} dept={item.dept} star={item.star} marginRight={marginRight} experience={item.experience} backColor={item.color} onPress={()=>{navigation.navigate("DoctorInfo" , {item: item})}}/>
    )
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} horizontal={horizontal} showsHorizontalScrollIndicator={false} numColumns={numColumns} />
    </SafeAreaView>
  );
};

export default DoctorsFlatList;
