import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Router from './routers/Router';

const App = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" />
  </>
);

export default App;
