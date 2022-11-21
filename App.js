import React from 'react';
import {SafeAreaView} from 'react-native';
import Socket from './src/Screens/Socket';
import Splash from './src/Screens/Splash';
import LogIn from './src/Screens/LogIn';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Splash />
        <Socket /> */}
        <LogIn></LogIn>
    </SafeAreaView>
  );
};

export default App;
