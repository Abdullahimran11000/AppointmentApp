import React from 'react';

import AppIntro from './src/screnns/AppIntro';
import LogIn from './src/screnns/LogIn';
import SignUp from './src/screnns/SignUp';
import Schedule from './src/screnns/Schedule';
import Maps from './src/screnns/Maps';
import ForgotPassword from './src/screnns/ForgotPassword';
import Verification from './src/screnns/Verification';
import Congratulation from './src/screnns/Congratulation';
import DoctorNearby from './src/screnns/DoctorNearby';
import SearchDoctor from './src/screnns/SearchDoctor';
import Drawer from './src/screnns/Drawer';
import DoctorInfo from './src/screnns/DoctorInfo';
import DoctorSpecialist from './src/screnns/DoctorSpecialist';
import MyProfile from './src/screnns/MyProfile';
import MyAppointment from './src/screnns/MyAppointment';
import Message from './src/screnns/Message';
import Notifications from './src/screnns/Notifications';
import VideoCalling from './src/screnns/VideoCalling';
import Chat from './src/screnns/Chat';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppProvider} from './src/assets/context/AppContext';
import TryAnotherWay from './src/screnns/TryAnotherWay';
import RecoverPassword from './src/screnns/RecoverPassword';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
          <Stack.Screen name="AppIntro" component={AppIntro} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="Congratulation" component={Congratulation} />
          <Stack.Screen name="Drawer" component={Drawer} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="DoctorSpecialist" component={DoctorSpecialist} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="DoctorNearby" component={DoctorNearby} />
          <Stack.Screen name="DoctorInfo" component={DoctorInfo} />
          <Stack.Screen name="SearchDoctor" component={SearchDoctor} />
          <Stack.Screen name="MyAppointment" component={MyAppointment} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="Chat" component={Chat}/>
          <Stack.Screen name="VideoCalling" component={VideoCalling} />
          <Stack.Screen name="TryAnotherWay" component={TryAnotherWay} />
        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
