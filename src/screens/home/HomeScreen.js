import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colorTheme } from '../../styles/Colors';

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Ini Home Screen</Text>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
