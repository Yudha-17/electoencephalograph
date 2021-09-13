import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colorTheme } from '../../styles/Colors';

const Splash1 = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Beranda');
  }, 2000);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, There.!</Text>
    </View>
  );
};
export default Splash1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorTheme,
  },
  text: {
    fontSize: 30,
    fontFamily: 'LobsterTwo-Regular',
  },
});
