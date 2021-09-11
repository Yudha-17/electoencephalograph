/* eslint-disable linebreak-style */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home/HomeScreen';

const BottomTab = createBottomTabNavigator();

const BottomRouter = () => (
  <BottomTab.Navigator
    initialRouteName="Beranda"
  >
    <BottomTab.Screen
      name="Beranda"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Beranda',
        tabBarIcon: () => <FaIcon name="home" size={27} color="red" />,
      }}
    />
  </BottomTab.Navigator>
);

export default BottomRouter;
