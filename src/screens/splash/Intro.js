/* eslint-disable global-require */
import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import { colorTheme } from '../../styles/Colors';
import { APP_VERSION } from '../../config';
import Gap from '../../components/Gap';
import Indicator from '../../components/Indicator';

const Intro = ({ navigation }) => {
  setTimeout(async () => {
    navigation.replace('Splash2');
  }, 2700);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../assets/images/usu.png')} style={styles.image} />
        <Gap height={20} />
        <Text style={styles.text}>Sedang Memuat...</Text>
        <Gap height={25} />
        <Indicator />
      </View>
      <Gap height={50} />
      <View style={styles.version}>
        <Text style={styles.appVersion}>Versi Aplikasi</Text>
        <Text style={styles.appVersion}>{APP_VERSION}</Text>
      </View>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  appVersion: {
    fontSize: 18,
    fontFamily: 'Montserrat-Medium',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: colorTheme,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Italic',
  },
  version: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
