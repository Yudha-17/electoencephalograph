/* eslint-disable react/jsx-filename-extension */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert, Image, StyleSheet, Text, View,
} from 'react-native';
import FoIcon from 'react-native-vector-icons/Fontisto';
import Gap from '../../../srcBaru/components/Gap';
import Button from '../../components/Button';
import { colorTheme } from '../../styles/Colors';

const AccountScreen = ({ navigation }) => {
  const logout = async () => {
    Alert.alert('Logout', 'Apakah anda yakin untuk keluar ?', [
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
      <Image style={styles.image} source={require('../../assets/images/pngaaa.com-2507930.png')} />
      <Gap height={15} />
      <View style={styles.content}>
        <Text style={styles.name}>Eve Holt</Text>
      </View>
      <Gap height={15} />
      <View style={styles.content}>
        <FoIcon name="email" size={20} />
        <Text style={styles.email}>
          eve.holt@reqres.in
        </Text>
      </View>
      <Gap height={20} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorTheme,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
