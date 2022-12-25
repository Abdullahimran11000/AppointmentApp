import React from 'react';

import AppIntro from './src/screnns/AuthScreen/AppIntro';
import LogIn from './src/screnns/AuthScreen/LogIn';
import SignUp from './src/screnns/AuthScreen/SignUp';
import Schedule from './src/screnns/Dashboard/Schedule';
import Maps from './src/screnns/Dashboard/Maps';
import RecoverPassword from './src/screnns/AuthScreen/RecoverPassword';
import ForgotPassword from './src/screnns/AuthScreen/ForgotPassword';
import Verification from './src/screnns/AuthScreen/Verification';
import Congratulation from './src/screnns/AuthScreen/Congratulation';
import DoctorNearby from './src/screnns/Dashboard/DoctorNearby';
import SearchDoctor from './src/screnns/Dashboard/SearchDoctor';
import Drawer from './src/screnns/AnimatedDrawer/Drawer';
import DoctorInfo from './src/screnns/Dashboard/DoctorInfo';
import DoctorSpecialist from './src/screnns/Dashboard/DoctorSpecialist';
import MyProfile from './src/screnns/AnimatedDrawer/MyProfile';
import MyAppointment from './src/screnns/AnimatedDrawer/MyAppointment';
import Message from './src/screnns/AnimatedDrawer/Message';
import Notifications from './src/screnns/AnimatedDrawer/Notifications';
import VideoCalling from './src/screnns/VideoCalling';
import Chat from './src/screnns/AnimatedDrawer/Chat';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppProvider} from './src/assets/context/AppContext';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
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
          <Stack.Screen name="VideoCalling" component={VideoCalling} />
          <Stack.Screen name="Chat" component={Chat} />

        </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
