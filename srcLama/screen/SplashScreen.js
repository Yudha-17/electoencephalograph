/* eslint-disable linebreak-style */
import React from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import {ASGet} from '../utils';
import {colorPrimary} from '../styles/colors';
import {APP_VERSION} from '../config/index';
import Gap from '../components/Gap';

const SplashScreen = ({navigation}) => {
  setTimeout(async () => {
    const token = await ASGet('token');
    if (token != null) {
      navigation.replace('Home');
    } else {
      navigation.replace('Login');
    }
  }, 2700);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/usu.png')}
        style={styles.image}
      />
      <Gap height={15} />
      <Text>Sedang memuat, silahkan menunggu...</Text>
      <Gap height={15} />
      <ActivityIndicator size="large" color={colorPrimary} />
      <Gap height={15} />
      <Text>Versi {APP_VERSION}</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
    marginVertical: 15,
  },
});
