import React from 'react';

import AppIntro from './src/screnns/AppIntro';
import LogIn from './src/screnns/LogIn';
import SignUp from './src/screnns/SignUp'
import Schedule from './src/screnns/Schedule';
import Maps from './src/screnns/Maps';
import RecoverPassword from './src/screnns/RecoverPassword';
import ForgotPassword from './src/screnns/ForgotPassword';
import Verification from './src/screnns/Verification';
import Congratulation from './src/screnns/Congratulation';
import Dashboard from './src/screnns/Dashboard';
import DoctorDepartment from './src/screnns/DoctorDepartment';
import DoctorCard from './src/screnns/DoctorCard';
import DoctorNearby from './src/screnns/DoctorNearby';
import SearchDoctor from './src/screnns/SearchDoctor';
import MyProfile from './src/screnns/MyProfile';
import Drawer from './src/screnns/Drawer';
import DoctorInfo from './src/screnns/DoctorInfo';
import Message from './src/screnns/Message';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppIntro" component={AppIntro}/>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="RecoverPassword" component={RecoverPassword}/>
        <Stack.Screen name="Verification" component={Verification}/>
        <Stack.Screen name="Congratulation" component={Congratulation}/>
        <Stack.Screen name="Drawer" component={Drawer}/>
        <Stack.Screen name="DoctorDepartment" component={DoctorDepartment}/>
        <Stack.Screen name="Maps" component={Maps}/>
        <Stack.Screen name="Schedule" component={Schedule}/>
        <Stack.Screen name="DoctorNearby" component={DoctorNearby}/>
        <Stack.Screen name="DoctorInfo" component={DoctorInfo}/>
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
};


export default App;

