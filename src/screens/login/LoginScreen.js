import React, { useState } from 'react';
import {
  Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import axios from 'axios';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Gap from '../../components/Gap';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colorLabel, colorTheme } from '../../styles/Colors';
import { API_BASE_URL, APP_NAME, APP_VERSION } from '../../config';

const LoginScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const login = async () => {
    // navigation.replace('Splash1');
    setIsLoading(true);

    const form = {
      email: userName,
      password,
    };

    await axios.post(`${API_BASE_URL}users?per_page=20`)
      .then((response) => {
        if (response && response.status === 200) {
          if (response.data.token) {
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
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>
          {APP_NAME}
          {' '}
        </Text>
        <FAIcon name="copyright" size={15} />
      </View>
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
        Alert.alert('Informasi Login',
          'Untuk informasi lebih lanjut, hubungi kami');
      }}
      >
        <Text style={styles.label}>Butuh bantuan login?</Text>
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
    fontSize: 26,
    fontFamily: 'Montserrat-Medium',
  },
});
