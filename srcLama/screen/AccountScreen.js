/* eslint-disable linebreak-style */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert, StyleSheet, Text, View,
} from 'react-native';
import Button from '../components/Button';

const AccountScreen = ({ navigation }) => {
  const logout = async () => {
    Alert.alert('Logout', 'Apakah Anda yakin untuk keluar.?',
      [
        {
          text: 'Ya',
          onPress: async () => {
            AsyncStorage.removeItem('token')
              .then(() => {
                navigation.replace('Login');
              });
          },
        },
        {
          text: 'Tidak', style: 'cancel',
        },
      ]);
  };

  return (
    <View style={styles.container}>
      <Text>Ini Akun Saya</Text>
      <Button title="Log Out" onPress={logout} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
