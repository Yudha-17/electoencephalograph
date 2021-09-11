/* eslint-disable linebreak-style */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import FOIcon from 'react-native-vector-icons/Fontisto';
import Indicator from '../components/Indicator';
import Gap from '../components/Gap';
import { API_BASE_URL } from '../config';

const APIDetailScreen = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  const getData = async () => {
    await axios.get(`${API_BASE_URL}users/${route.params.id}`)
      .then((response) => {
        if (response && response.data.data) {
          setDataSource(response.data.data);
        }
      })
      .catch((response) => {
        console.log(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => { getData(); }, []);

  if (isLoading === true) {
    return (
      <Indicator />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: dataSource.avatar }}
      />
      <Gap height={35} />
      <View style={styles.content}>
        <Text style={styles.name}>
          {dataSource.first_name}
          {' '}
          {dataSource.last_name}
        </Text>
      </View>
      <View style={styles.content}>
        <FOIcon name="email" size={20} />
        <Gap width={10} />
        <Text style={styles.email}>
          {dataSource.email}
        </Text>
      </View>
      <Gap height={90} />
    </SafeAreaView>
  );
};

export default APIDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  email: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
