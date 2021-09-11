/* eslint-disable linebreak-style */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screen/HomeScreen';
import {colorPrimary} from '../styles/colors';
import APIScreen from '../screen/APIScreen';
import AccountScreen from '../screen/AccountScreen';
import Channel from '../screen/Channel/Channel';

const BottomTab = createBottomTabNavigator();

const BottomRouter = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: colorPrimary,
    }}>
    <BottomTab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Beranda',
        tabBarIcon: ({color}) => <FaIcon name="home" size={27} color={color} />,
      }}
    />
    <BottomTab.Screen
      name="APIScreen"
      component={APIScreen}
      options={{
        tabBarLabel: 'API',
        tabBarIcon: ({color}) => (
          <FaIcon name="signal" size={27} color={color} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Channel"
      component={Channel}
      options={{
        tabBarLabel: 'Channel',
        tabBarIcon: ({color}) => (
          <FaIcon name="globe" size={27} color={color} />
        ),
      }}
    />
    <BottomTab.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Akunku',
        tabBarIcon: ({color}) => <FaIcon name="user" size={27} color={color} />,
      }}
    />
  </BottomTab.Navigator>
);

export default BottomRouter;
