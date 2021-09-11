import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routes/Router';
import FlashMessage from 'react-native-flash-message';

const App = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" />
  </>
);

export default App;
