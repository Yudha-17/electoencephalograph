/* eslint-disable linebreak-style */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home/HomeScreen';
import { colorPrimary } from '../styles/Colors';
import User from '../screens/user/User';
import ChannelScreen from '../screens/channel';

const BottomTab = createBottomTabNavigator();

const BottomRouter = () => (
  <BottomTab.Navigator
    initialRouteName="Beranda"
    tabBarOptions={{
      activeTintColor: colorPrimary,
    }}
  >
    <BottomTab.Screen
      name="Beranda"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Beranda',
        tabBarIcon: ({ color }) => <FaIcon name="home" size={27} color={color} />,
      }}
    />
    <BottomTab.Screen
      name="Channel"
      component={ChannelScreen}
      options={{
        tabBarLabel: 'Channel',
        tabBarIcon: ({ color }) => (
          <FaIcon name="globe" size={27} color={color} />
        ),
      }}
    />
    <BottomTab.Screen
      name="Detail Akun"
      component={User}
      options={{
        tabBarLabel: 'Akun',
        tabBarIcon: ({ color }) => <FaIcon name="user" size={27} color={color} />,
      }}
    />
  </BottomTab.Navigator>
);

export default BottomRouter;
