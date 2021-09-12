import React, { useState, useEffect } from 'react';
import {
  Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import Gap from '../../components/Gap';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ASGet, ASSet } from '../../utils/index';
import { colorLabel, colorTheme } from '../../styles/Colors';
import { APP_NAME, APP_VERSION } from '../../config';

const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
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
            navigation.replace('Beranda');
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
    <SafeAreaView style={styles.container}>
      <Gap height={80} />
      <Image source={require('../../assets/images/usu.png')} style={styles.image} />
      <Gap height={5} />
      <Text style={styles.title}>{APP_NAME}</Text>
      <Gap height={70} />
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
        navigation.navigate('Baru');
      }}
      >
        <Text style={styles.label}>Belum punya akun.?</Text>
      </TouchableOpacity>
      <Gap height={20} />
      <Text>
        Versi
        {' '}
        {APP_VERSION}
      </Text>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colorTheme,
  },
  image: {
    width: 128,
    height: 128,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  label: {
    fontSize: 13,
    color: colorLabel,
  },
  title: {
    fontSize: 25,
    fontFamily: 'PlayfairDisplaySC-Black',
  },
});
