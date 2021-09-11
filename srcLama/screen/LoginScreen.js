/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import {
  Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { API_BASE_URL, APP_NAME, APP_VERSION } from '../config/index';
import Gap from '../components/Gap';
import Input from '../components/Input';
import Button from '../components/Button';
import { ASGet, ASSet } from '../utils';
import { colorLabel } from '../styles/colors';

const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const login = async () => {
    // navigation.replace('Home');
    setIsLoading(true);

    const form = {
      email: userName,
      password,
    };

    await axios.post(`${API_BASE_URL}login`, form)
      .then((response) => {
        if (response && response.status === 200) {
          if (response.data.token) {
            // Simpan Token Ke Asynchron Set
            ASSet('token', response.data.token);
            navigation.replace('Home');
          }
        }
      })
      .catch((error) => {
        console.log('Error : ', error);
        Alert.alert('Login gagal', 'Username / Password Salah.!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Gap height={50} />
        <Image source={require('../assets/images/usu.png')} style={styles.image} />
        <Gap height={5} />
        <Text style={styles.title}>{APP_NAME}</Text>
        <Gap height={30} />
        <Input
          label="Username"
          icon="user"
          value={userName}
          onChangeText={(value) => { setUserName(value); }}
        />
        <Gap height={20} />
        <Input
          label="Password"
          icon="lock"
          secureTextEntry
          value={password}
          onChangeText={(value) => { setPassword(value); }}
        />
        <Gap height={20} />
        <Button
          title="LOGIN"
          isLoading={isLoading}
          onPress={login}
        />
        <Gap height={15} />
        <TouchableOpacity onPress={() => {
          Alert.alert('Informasi Login',
            'Untuk informasi lebih lanjut, hubungi kami');
        }}
        >
          <Text style={styles.label}>Butuh bantuan login?</Text>
        </TouchableOpacity>
        <Gap height={10} />
        <Text>
          Versi
          {' '}
          {APP_VERSION}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  title: {
    fontSize: 24,
  },
  label: {
    fontSize: 13,
    color: colorLabel,
  },
});
