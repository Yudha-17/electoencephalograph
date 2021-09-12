import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomRouter from './BottomRouter';
import Intro from '../screens/splash/Intro';
import Splash1 from '../screens/splash/Splash1';
import Splash2 from '../screens/splash/Splash2';
import LoginScreen from '../screens/login/LoginScreen';
import CreateAccount from '../screens/login/CreateAccount';

const Stack = createStackNavigator();

const Router = () => (
  <Stack.Navigator initialRouteName="Splash0">
    <Stack.Screen
      name="Splash0"
      component={Intro}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Splash1"
      component={Splash1}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Splash2"
      component={Splash2}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Baru"
      component={CreateAccount}
    />
    <Stack.Screen
      name="Beranda"
      component={BottomRouter}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Router;
