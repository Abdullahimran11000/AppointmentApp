import React from 'react';
import {SafeAreaView} from 'react-native';
import BackButton from './BackButton';
import DoctorCard from './DoctorCard';

const DoctorNearby = props => {
  return (
    <SafeAreaView>
      <BackButton onPress={()=> props.navigation.goBack()}>{'Nearby Doctor'}</BackButton>
      <DoctorCard color={'rgba(247, 106, 106, 0.4)'} source={require('../assets/images/drOmer.png')} name={'Dr. Omer'} dept={'Urology'} star={'4.0'} experience={'2 years'}/>
    </SafeAreaView>
  );
};

export default DoctorNearby;
