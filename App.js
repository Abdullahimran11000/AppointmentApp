import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  SafeAreaView
} from 'react-native';
import Socket from './src/Screens/Socket';
import Splash from './src/Screens/Splash';

const App = () => {
  return (
    <SafeAreaView>
      <Splash />
        <Socket />
    </SafeAreaView>
  );
};

export default App;
