import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';
import BottomRouter from './BottomRouter';
import Intro from '../screens/splash/Intro';
import Splash1 from '../screens/splash/Splash1';
import LoginScreen from '../screens/login/LoginScreen';
import User from '../screens/user/User';
import AddChannelScreen from '../screens/channel/add';
import UpdateChannelScreen from '../screens/channel/update';
import ChartScreen from '../screens/home/ChartScreen';
import AddChartScreen from '../screens/home/AddChartScreen';

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
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Beranda"
      component={BottomRouter}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Chart"
      component={ChartScreen}
      options={({ navigation, route }) => ({
        headerTitle: 'Grafik Kurva',
        headerRight: () => (
          <Button
            onPress={() => {
              navigation.navigate('Tambah Chart', {
                id: route.params.id,
                apiKey: route.params.apiKey,
              });
            }}
            title="Tambah"
            color="blue"
          />
        ),
      })}
    />
    <Stack.Screen
      name="Tambah Chart"
      component={AddChartScreen}
      options={{
        title: 'Tambah Data',
      }}
    />
    <Stack.Screen
      name="Tambah Channel"
      component={AddChannelScreen}
      options={{ title: 'Tambah Channel' }}
    />
    <Stack.Screen
      name="Update Channel"
      component={UpdateChannelScreen}
      options={{ title: 'Update Channel' }}
    />
    <Stack.Screen
      name="Detail Akun"
      component={User}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default Router;
