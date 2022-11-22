import React from 'react';
import AppIntro from './src/screens/AppIntro';
import LogIn from './src/screens/LogIn'
import RecoverPassword from './src/screens/RecoverPassword';
import ForgotPassword from './src/screens/ForgotPassword';
import Verification from './src/screens/Verification';
import Congratulation from './src/screens/Congratulation';

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
