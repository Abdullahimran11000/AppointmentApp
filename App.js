import React from 'react';
import AppIntro from './src/Screens/AppIntro';
import LogIn from './src/Screens/LogIn';
import ForgotPassword from './src/Screens/ForgotPassword';
import Verification from './src/Screens/Verification';
import RecoverPassword from './src/Screens/RecoverPassword';
import Congratulation from './src/Screens/Congratulation';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppIntro" component={AppIntro}/>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <Stack.Screen name="Verification" component={Verification}/>
        <Stack.Screen name="RecoverPassword" component={RecoverPassword}/>
        <Stack.Screen name="Congratulation" component={Congratulation}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
