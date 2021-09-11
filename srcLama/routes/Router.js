/* eslint-disable linebreak-style */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import BottomRouter from './BottomRouter';
import APIDetailScreen from '../screen/APIDetailScreen';
import Channel from '../screen/Channel/Channel';
import InputChannel from '../screen/Channel/InputChannel';
import UpdateChannelScreen from '../screen/Channel/Update';
import ChartScreen from '../screen/ChartScreen';

const Stack = createStackNavigator();

const Router = props => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="APIDetailScreen"
      component={APIDetailScreen}
      options={{
        title: 'Detail API',
      }}
    />
    <Stack.Screen
      name="Home"
      component={BottomRouter}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Channel"
      component={Channel}
      options={{headerShown: false}}
    />
    <Stack.Screen name="TambahChannel" component={InputChannel} />
    <Stack.Screen name="Update Channel" component={UpdateChannelScreen} />
    <Stack.Screen
      name="Chart"
      component={ChartScreen}
      options={{title: 'Chart Container'}}
    />
  </Stack.Navigator>
);

export default Router;
