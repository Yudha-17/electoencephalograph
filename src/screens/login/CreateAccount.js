import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colorTheme } from '../../styles/Colors';

const CreateAccount = () => (
  <View style={styles.container}>
    <Text>Mari buat akun</Text>
  </View>
);

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorTheme,
  },
});
